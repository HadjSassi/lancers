import { Component, OnInit } from '@angular/core';
import {Services} from "../../../../model/Services";
import {ServicesService} from "../../../../services/Services/services.service";
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage-angular";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

  ownerMail : string = "";

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
  constructor(private service:ServicesService,private router: Router, private storage: Storage,
    private localNotifications: LocalNotifications
   
  ) { }

  async ngOnInit() {
    await this.storage.create();
    this.ownerMail = await this.storage.get('mail');
    this.newService.ownerEmail = this.ownerMail;
  }

  submitForm() {
    this.newService.durre = this.dureeTime+" "+this.dureeUnit;
    this.service.services_write_(this.newService).subscribe(
      (result: { Status: string,Document_ID:string })=>{
        this.router.navigate([`services/consult-service/${result.Document_ID}`]);
      }
      
    );
   
  
  
  }


 
  
}
