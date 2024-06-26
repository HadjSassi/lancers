import { Component, OnInit } from '@angular/core';
import {Services} from "../../../../model/Services";
import {ServicesService} from "../../../../services/Services/services.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";
import {ProfileService} from "../../../../services/Profile/profile.service";
import {Profile} from "../../../../model/Profile";
import {Sexe} from "../../../../model/Sexe";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {

  isOwner: boolean = true;
  currentMail : string = "";

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


  updateService: Services = new Services(
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


  dureeUnit : string = "days";
  dureeTime : number = 0 ;


  constructor(private service: ServicesService, private router: Router, private route: ActivatedRoute,
              private alertController: AlertController, private storage: Storage,private profileService: ProfileService) {
  }

  async ngOnInit() {
    await this.storage.create();
    this.currentMail = await this.storage.get('mail');
    this.route.params.subscribe(params => {
      this.updateService.idService = params['id'];
      this.service.get_services_by_id_(this.updateService.idService).subscribe(
        (result) => {
          console.log(this.currentMail);
          console.log(result.ownerEmail);
          console.log(this.currentMail === result.ownerEmail);
          if (result.ownerEmail !== this.currentMail)
            this.router.navigate([`services/consult-service/${result.idService}`]);
          this.dureeUnit = result.durre.split(' ')[1].toLowerCase();
          this.dureeTime = Number(result.durre.split(' ')[0]);
          this.updateService = result;
          this.profileService.profile_get_by_email_(this.currentMail).subscribe(
            (resss) => {
              this.profile = resss;
              console.log(this.profile);
            }
          )
        }
      );
    });
  }


  submitForm() {
    this.updateService.durre = this.dureeTime+" "+this.dureeUnit;
    this.service.services_update_(this.updateService.idService,this.updateService).subscribe(
      (result)=>{
        this.router.navigate([`services/consult-service/${this.updateService.idService}`], { queryParams: { updated: 'true' } });
      }
    );
  }

}
