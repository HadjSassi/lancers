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

  constructor(private service: ServicesService, private routes: Router, private route: ActivatedRoute,
              private lancerService: LancerService, private profileService: ProfileService,
              private alertController: AlertController) {
  }

  ngOnInit() {
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
                  //todo check if the current user is the same owner of this service by simply modify the variable isOwner
                }
              )
            }
          )
        }
      );
    });
  }

  viewLancer() {
    this.routes.navigate([`Lancers/${this.lancer.email}`]);
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
                this.routes.navigate([`services`]);
                // window.location().reload();
              }
            );

          }
        }
      ]
    });

    await alert.present();
  }
}
