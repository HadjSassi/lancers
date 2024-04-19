import {Component, OnInit} from '@angular/core';
import {Services} from "../../../../model/Services";
import {Contracts} from "../../../../model/Contracts";
import {Etat} from "../../../../model/Etat";
import {ServicesService} from "../../../../services/Services/services.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LancerService} from "../../../../services/Lancer/lancer.service";
import {ProfileService} from "../../../../services/Profile/profile.service";
import {AlertController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";
import {ContractService} from "../../../../services/Contract/contract.service";

@Component({
  selector: 'app-consultation-contract',
  templateUrl: './consultation-contract.page.html',
  styleUrls: ['./consultation-contract.page.scss'],
})
export class ConsultationContractPage implements OnInit {

  currentService: Services = new Services(
    0,
    "",
    "",
    "",
    0,
    false,
    new Date(),
    0,
    "",
    false
  );

  currentContract: Contracts = new Contracts(
    0,
    "",
    0,
    new Date(),
    new Date(),
    0,
    Etat.Attente,
    this.currentService,
    ""
  ) ;

  isFreelancer: boolean = false;
  isOwner: boolean = false;
  userMail : string = "";


  constructor(private serviceService: ServicesService, private router: Router, private route: ActivatedRoute,
              private lancerService: LancerService, private profileService: ProfileService,
              private alertController: AlertController, private storage: Storage,
              private contractService: ContractService) {
  }

  async ngOnInit() {
    await this.storage.create();
    this.userMail = await this.storage.get('mail');
    this.route.params.subscribe(params => {
      this.currentContract.id = params['id'];
      this.contractService.get_contract_by_id_(this.currentContract.id).subscribe(
        (result) => {
          this.currentContract = result;
          this.isFreelancer = this.userMail === result.service.ownerEmail;
          this.isOwner = this.userMail === result.email;
        }
      );
    });
  }

  calculateLateDays(deliveryDate: Date): string {
    const currentDate = new Date();
    const difference = currentDate.getTime() - new Date(deliveryDate).getTime();
    let daysLate = 0;

    const duration = this.currentContract.service.durre;
    const [value, unit] = duration.split(' ');

    switch (unit) {
      case 'year':
      case 'years':
        daysLate = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        return `${daysLate} ${daysLate === 1 ? 'year' : 'years'}`;
      case 'month':
      case 'months':
        daysLate = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        return `${daysLate} ${daysLate === 1 ? 'month' : 'months'}`;
      case 'week':
      case 'weeks':
        daysLate = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        return `${daysLate} ${daysLate === 1 ? 'week' : 'weeks'}`;
      case 'day':
      case 'days':
        daysLate = Math.floor(difference / (1000 * 60 * 60 * 24));
        return `${daysLate} ${daysLate === 1 ? 'day' : 'days'}`;
      case 'hour':
      case 'hours':
        daysLate = Math.floor(difference / (1000 * 60 * 60));
        return `${daysLate} ${daysLate === 1 ? 'hour' : 'hours'}`;
      case 'minute':
      case 'minutes':
        daysLate = Math.floor(difference / (1000 * 60));
        return `${daysLate} ${daysLate === 1 ? 'minute' : 'minutes'}`;
      default:
        return 'Unknown duration unit';
    }
  }

  async Fini() {
    const alert = await this.alertController.create({
      header: 'Post Link',
      subHeader:'If you submitted the link, you can\'t resubmit!',
      inputs: [
        {
          name: 'link',
          type: 'url',
          placeholder: 'Enter link here...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Post',
          handler: (data) => {
            const link = data.link;
            // Do something with the link (e.g., send it to a server)
            this.currentContract.etat=Etat.Fini;
            this.currentContract.link = link;
            this.contractService.contract_update_(this.currentContract.id,this.currentContract).subscribe();
          }
        }
      ]
    });

    await alert.present();
  }

  EnCours():void{
    this.currentContract.etat = Etat.EnCours;
    this.contractService.contract_update_(this.currentContract.id,this.currentContract).subscribe();
  }
  Approve():void{
    this.currentContract.etat = Etat.Approved;
    this.contractService.contract_update_(this.currentContract.id,this.currentContract).subscribe();
  }
  Reject():void{
    this.currentContract.etat = Etat.Rejected;
    this.contractService.contract_update_(this.currentContract.id,this.currentContract).subscribe();
  }


}
