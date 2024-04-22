import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-nom-de-la-page',
  templateUrl: './nom-de-la-page.page.html',
  styleUrls: ['./nom-de-la-page.page.scss'],
})
export class NomDeLaPagePage implements OnInit {
  services: any[] = [];
  filteredServices: any[] = [];
  content_loaded: boolean = false;
  searchTerm: string = ''; // Initialiser avec une chaîne vide
  maxPrice: number = 0; // Initialiser avec 0 ou une valeur par défaut appropriée
  minScore: number = 0; // Initialiser avec 0 ou une valeur par défaut appropriée
  maxDuration: number = 0; 
  constructor(private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
   ) { }
 
   
  ngOnInit() {
    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
    this.services = [];
    this.filteredServices = this.services;
  }
  filterByScore(services: any[], minScore: number): any[] {
    return services.filter(service => service.score >= minScore);
  }
  filterByPrice(services: any[], maxPrice: number): any[] {
    return services.filter(service => service.price <= maxPrice);
  }

 

  filterByDuration(services: any[], maxDuration: number): any[] {
    return services.filter(service => service.duration <= maxDuration);
  }
  filterServices() {
    this.filteredServices = this.services;
    if (this.minScore) {
      this.filteredServices = this.filterByScore(this.filteredServices, this.minScore);
    }
    if (this.maxPrice) {
      this.filteredServices = this.filterByPrice(this.filteredServices, this.maxPrice);
    }
    if (this.maxDuration) {
      this.filteredServices = this.filterByDuration(this.filteredServices, this.maxDuration);
    }
  }
  
}
