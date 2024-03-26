import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper/helper.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage {

  content_loaded: boolean = false;
  description: string = "";
  price: string = "";
  serviceName: string = "";

  constructor(
    private helperService: HelperService,
    private alertController: AlertController
  ) {
    this.description = "";
    this.price = "";
    this.serviceName = "";
  }


  services: { description: string, price: string, servicesNames: string }[] = [];

  submitForm() {
    this.services.push({ description: this.description, price: this.price, servicesNames: this.serviceName });
    this.description = "";
    this.serviceName = "";
    this.price = "";
  }
  editService(index: number) {
    // Implementer la logique pour l'édition du service
    // Par exemple, vous pouvez remplir le formulaire avec les données du service sélectionné pour l'édition
    this.description = this.services[index].description;
    this.price = this.services[index].price;
    this.serviceName = this.services[index].servicesNames;
    this.services.splice(index, 1); // Supprimer le service de la liste après l'avoir récupéré pour l'édition
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
            // If user confirms deletion, delete the service
            this.services.splice(index, 1);
          }
        }
      ]
    });

    await alert.present();
  }

}
