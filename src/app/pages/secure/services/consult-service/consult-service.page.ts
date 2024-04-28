import {Component, OnInit} from '@angular/core';
import {Services} from "../../../../model/Services";
import {ServicesService} from "../../../../services/Services/services.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LancerService} from "../../../../services/Lancer/lancer.service";
import {Lancer} from "../../../../model/Lancer";
import {ProfileService} from "../../../../services/Profile/profile.service";
import {Profile} from "../../../../model/Profile";
import {Sexe} from "../../../../model/Sexe";
import {AlertController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";
import {ContractService} from "../../../../services/Contract/contract.service";
import {Contracts} from "../../../../model/Contracts";
import {Etat} from "../../../../model/Etat";

@Component({
  selector: 'app-consult-service',
  templateUrl: './consult-service.page.html',
  styleUrls: ['./consult-service.page.scss'],
})
export class ConsultServicePage implements OnInit {

  isOwner: boolean = false;
  userMail : string = "";

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

  lancer: Lancer = new Lancer(
    "",
    0,
    [],
    ""
  );

  profile: Profile = new Profile(
    false,
    "",
    "",
    "",
    "",
    0,
    "",
    "",
    new Date(),
    Sexe.Other,
    "",
    "",
    "",
    [],
    ""
  );

  contrat: Contracts = new Contracts(
    0,
    "",
    0,
    new Date(),
    new Date(),
    0,
    Etat.Attente,
    this.currentService,
    ""
  );

  constructor(private service: ServicesService, private router: Router, private route: ActivatedRoute,
              private lancerService: LancerService, private profileService: ProfileService,
              private alertController: AlertController, private storage: Storage,
              private contractService: ContractService) {
  }

  async ngOnInit() {
    await this.storage.create();
    this.userMail = await this.storage.get('mail');
    this.route.params.subscribe(params => {
      this.currentService.idService = params['id'];
      this.service.get_services_by_id_(this.currentService.idService).subscribe(
        (result) => {
          this.currentService = result;
          this.lancerService.get_lancer_by_email_(this.currentService.ownerEmail).subscribe(
            (res) => {
              this.lancer = res;
              this.profileService.profile_get_by_email_(this.currentService.ownerEmail).subscribe(
                (re) => {
                  this.profile = re;
                  this.isOwner = this.userMail==re.email;
                }
              )
            }
          )
        }
      );
    });
  }

  viewLancer() {
    this.router.navigate([`Lancers/${this.lancer.email}`]);
  }

  editService(){
    this.router.navigate([`services/edit-service/${this.currentService.idService}`]);
  }

  async deleteService() {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this service?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Delete',
          handler: () => {
            this.service.services_delete_(this.currentService.idService).subscribe(
              (result) => {
                this.router.navigate(['services'], { queryParams: { updated: 'true' } });
                // window.location().reload();
              }
            );

          }
        }
      ]
    });

    await alert.present();
  }

  updateHidden() {
    this.service.services_update_(this.currentService.idService,this.currentService).subscribe();
  }

  async requestService() {
    function parseDuration(durre:string) {
      const parts = durre.split(' ');
      const value = parseInt(parts[0]); // Extract numeric value
      const unit = parts[1].toLowerCase(); // Extract duration unit and convert to lowercase
      let multiplier = 1; // Default multiplier for milliseconds (1 millisecond)

      switch(unit) {
        case 'year':
        case 'years':
          multiplier = 1000 * 60 * 60 * 24 * 365;
          break;
        case 'month':
        case 'months':
          multiplier = 1000 * 60 * 60 * 24 * 30; // Assuming a month has 30 days
          break;
        case 'week':
        case 'weeks':
          multiplier = 1000 * 60 * 60 * 24 * 7;
          break;
        case 'day':
        case 'days':
          multiplier = 1000 * 60 * 60 * 24;
          break;
        case 'hour':
        case 'hours':
          multiplier = 1000 * 60 * 60;
          break;
        case 'minute':
        case 'minutes':
          multiplier = 1000 * 60;
          break;
      }

      return value * multiplier; // Calculate total milliseconds
    }

    const alert = await this.alertController.create({
      header: 'Confirm Request',
      message: 'Are you sure you want to request this service?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Request',
          handler: () => {

            console.log("service requested");
            this.contrat.dateDebut = new Date();
            this.contrat.dateLivraison = new Date(new Date().getTime()+parseDuration(this.currentService.durre));
            this.contrat.idService = this.currentService.idService;
            this.contrat.email = this.userMail;
            this.contrat.prix = this.currentService.prix;
            this.contractService.contract_write_(this.contrat).subscribe(
              (result: { Status: string,Document_ID:string })=>{
                  console.log(result.Document_ID, result);
                  this.router.navigate([`contracts/consultation-contract/${result.Document_ID}`]);
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }

}
