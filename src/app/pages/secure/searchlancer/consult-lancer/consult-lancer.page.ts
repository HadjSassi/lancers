import { Component, OnInit } from '@angular/core';
import {Services} from "../../../../model/Services";
import {Lancer} from "../../../../model/Lancer";
import {Profile} from "../../../../model/Profile";
import {Sexe} from "../../../../model/Sexe";
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
  selector: 'app-consult-lancer',
  templateUrl: './consult-lancer.page.html',
  styleUrls: ['./consult-lancer.page.scss'],
})
export class ConsultLancerPage implements OnInit {


  isOwner: boolean = false;
  userMail : string = "";

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

  listaService: Services[] = [];


  constructor(private service: ServicesService, private router: Router, private route: ActivatedRoute,
              private lancerService: LancerService, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lancer.email = params['id'];
      this.lancerService.get_lancer_by_email_(this.lancer.email).subscribe(
        (result) => {
          this.lancer = result;
          this.profileService.profile_get_by_email_(result.email).subscribe(
            (resutl)=>{
              this.profile = resutl;
              this.service.get_services_by_email_(resutl.email).subscribe(
                (rest) => {
                  this.listaService = rest;
                }
              );
            }
          );
        }
      );
    });
  }


}
