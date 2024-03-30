import {Component, OnInit} from '@angular/core';
import { HelperService } from 'src/app/services/helper/helper.service';
import { AlertController } from '@ionic/angular';
import {Services} from "../../../model/Services";
import {ServicesService} from "../../../services/Services/services.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit{

  content_loaded: boolean = false;

  ownerMail : string = "test@test.test";
  services: Services[] = [];
  currentService: Services = new Services(
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
  scoreFilter: any = "none";
  approvalFilter: any = "none";
  dateFilter: any= "recent";
  priceFilter: any= "none";
  hiddenFilter: any = "both";

  constructor(private helperService: HelperService,private alertController: AlertController,
              private service:ServicesService,private routes: Router) {
  }

  ngOnInit() {
    //todo if faut get the current mail of the user and by that mail we search
    //todo lett's suppose that the current mail is test@test.test but you need to make it after the sign in
    this.service.get_services_by_email_(this.ownerMail).subscribe(
      (result)=>{
        this.services = result;}
    );
  }

  initialiseService():void{
    this.currentService = new Services(
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
  }

  submitForm() {
    //todo you need to check the auto increment for the id of the service
    this.service.services_write_(this.currentService).subscribe(
      (result)=>{
        this.services.push(this.currentService);
        this.initialiseService();
      }
    );

  }
  editService(index: number) {
    // this.service.services_update_(this.currentService.idService,this.currentService).subscribe(
    //   (result)=>{
    //    todo if it press on the edit normally it will open a pop up for modification
    //   }
    // );
    this.currentService = this.services[index];
    this.services.splice(index, 1);
  }

  async deleteService(index: number) {
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
              (result)=>{
                this.services.splice(index, 1);
              }
            );

          }
        }
      ]
    });

    await alert.present();
  }

  addService() {
    this.routes.navigate(['services/add-service']);
  }

  consultService(service: Services) {
    this.routes.navigate([`services/consult-service/${service.idService}`],);
  }
}
