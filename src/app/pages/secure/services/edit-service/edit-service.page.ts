import { Component, OnInit } from '@angular/core';
import {Services} from "../../../../model/Services";
import {Lancer} from "../../../../model/Lancer";
import {Profile} from "../../../../model/Profile";
import {Sexe} from "../../../../model/Sexe";
import {ServicesService} from "../../../../services/Services/services.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LancerService} from "../../../../services/Lancer/lancer.service";
import {ProfileService} from "../../../../services/Profile/profile.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {

  isOwner: boolean = true;
  currentMail : string = "test@test.test";//todo this should be proper of the user of the app after singing in


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
              private alertController: AlertController) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.updateService.idService = params['id'];
      this.service.get_services_by_id_(this.updateService.idService).subscribe(
        (result) => {
          if (result.ownerEmail !== this.currentMail)
            this.router.navigate([`services/consult-service/${result.idService}`]);
          this.dureeUnit = result.durre.split(' ')[1].toLowerCase();
          this.dureeTime = Number(result.durre.split(' ')[0]);
          this.updateService = result;
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
