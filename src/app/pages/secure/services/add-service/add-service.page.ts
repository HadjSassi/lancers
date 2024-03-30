import { Component, OnInit } from '@angular/core';
import {Services} from "../../../../model/Services";
import {ServicesService} from "../../../../services/Services/services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

  ownerMail : string = "test@test.test";//todo this should be proper of the user of the app after singing in

  newService: Services = new Services(
    0,
    this.ownerMail,
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
  constructor(private service:ServicesService,private routes: Router) { }

  ngOnInit() {
    console.log("I need to get the owner mail");
  }

  submitForm() {
    //todo the auto increment for the id of the service
    this.newService.durre = this.dureeTime+" "+this.dureeUnit
    this.service.services_write_(this.newService).subscribe(
      (result)=>{
        this.routes.navigate(['services']);//todo redirect to the page of the service
      }
    );
  }
}
