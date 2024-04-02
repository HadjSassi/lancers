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

@Component({
  selector: 'app-consult-service',
  templateUrl: './consult-service.page.html',
  styleUrls: ['./consult-service.page.scss'],
})
export class ConsultServicePage implements OnInit {

  isOwner: boolean = false;

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

  constructor(private service: ServicesService, private router: Router, private route: ActivatedRoute,
              private lancerService: LancerService, private profileService: ProfileService,
              private alertController: AlertController, private storage: Storage) {
  }

  async ngOnInit() {
    await this.storage.create();
    const storedEmail = await this.storage.get('mail');
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
                  console.log(storedEmail);
                  console.log(result.ownerEmail);
                  console.log(storedEmail === result.ownerEmail);
                  this.profile = re;
                  this.isOwner = storedEmail==re.email;
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
            //todo to add a new contract and navigate to that contract
          }
        }
      ]
    });

    await alert.present();
  }

}
