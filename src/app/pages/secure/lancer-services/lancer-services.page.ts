import {Component, OnInit} from '@angular/core';
import {Services} from "../../../model/Services";
import {HelperService} from "../../../services/helper/helper.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {ServicesService} from "../../../services/Services/services.service";
import {NavigationEnd, Router} from "@angular/router";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-lancer-services',
  templateUrl: './lancer-services.page.html',
  styleUrls: ['./lancer-services.page.scss'],
})
export class LancerServicesPage implements OnInit {
  content_loaded: boolean = false;
  currentYear : number = new Date().getFullYear();
  currentMonth : number = new Date().getMonth()+1;

  services: Services[] = [];
  scoreFilter: any = "none";
  approvalFilter: any = "none";
  dateFilter: any = "recent";
  priceFilter: any = "none";
  hiddenFilter: any = "both";
  durationFilter: any = "none";
  searchQuery: any = "";

  constructor(private helperService: HelperService, private alertController: AlertController,
              private service: ServicesService, private router: Router,
              private loadingCtrl:LoadingController) {
  }

  async ngOnInit() {
    await this.initialiseService();
  }


  filterServices() {
    function parseDuration(durationString: string): number {
      const parts = durationString.split(' ');
      let value = parseInt(parts[0]);
      const unit = parts[1].toLowerCase();

      // Convert all durations to milliseconds for comparison
      switch (unit) {
        case 'year':
        case 'years':
          value *= 365 * 24 * 60 * 60 * 1000;
          break;
        case 'month':
        case 'months':
          value *= 30 * 24 * 60 * 60 * 1000;
          break;
        case 'week':
        case 'weeks':
          value *= 7 * 24 * 60 * 60 * 1000;
          break;
        case 'day':
        case 'days':
          value *= 24 * 60 * 60 * 1000;
          break;
        case 'hour':
        case 'hours':
          value *= 60 * 60 * 1000;
          break;
        case 'minute':
        case 'minutes':
          value *= 60 * 1000;
          break;
        case 'second':
        case 'seconds':
          value *= 1000;
          break;
      }
      return value;
    }

    let filteredServices = [...this.services]; // Make a copy of the original array

    if (this.hiddenFilter === 'true') {
      filteredServices = filteredServices.filter(service => service.hidden);
    } else if (this.hiddenFilter === 'false') {
      filteredServices = filteredServices.filter(service => !service.hidden);
    }

    if (this.approvalFilter === 'true') {
      filteredServices = filteredServices.filter(service => service.approved);
    } else if (this.approvalFilter === 'false') {
      filteredServices = filteredServices.filter(service => !service.approved);
    }

    if (this.durationFilter === 'highestDuration') {
      filteredServices = filteredServices.sort((a, b) => parseDuration(b.durre) - parseDuration(a.durre));
    } else if (this.durationFilter === 'lowestDuration') {
      filteredServices = filteredServices.sort((a, b) => parseDuration(a.durre) - parseDuration(b.durre));
    }

    if (this.priceFilter === 'highestPrice') {
      filteredServices = filteredServices.sort((a, b) => b.prix - a.prix);
    } else if (this.priceFilter === 'lowestPrice') {
      filteredServices = filteredServices.sort((a, b) => a.prix - b.prix);
    }

    if (this.scoreFilter === 'highestScore') {
      filteredServices = filteredServices.sort((a, b) => b.score - a.score);
    } else if (this.scoreFilter === 'lowestScore') {
      filteredServices = filteredServices.sort((a, b) => a.score - b.score);
    }

    if (this.dateFilter === 'recent') {
      filteredServices = filteredServices.sort((a, b) => new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime());
    } else if (this.dateFilter === 'oldest') {
      filteredServices = filteredServices.sort((a, b) => new Date(a.datePublication).getTime() - new Date(b.datePublication).getTime());
    }


    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredServices = filteredServices.filter(service =>
        service.name.toLowerCase().includes(query)
      );
    }


    console.log(filteredServices);
    // Return the filtered services
    return filteredServices;
  }

  consultService(service: Services) {
    this.router.navigate([`services/consult-service/${service.idService}`],);
  }

  async initialiseService(event?: any) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    this.service.services_all_(this.currentYear, this.currentMonth).subscribe(
      (result) => {
        loading.dismiss();
        this.services.push(...result);
        if (event) {
          event.target.complete();
          event.target.disabled = this.currentYear == 2020;
        }
      }
    );
  }

  async loadMore(event: any) {
    if(this.currentMonth==1)
      this.currentYear--;
    else
      this.currentMonth--;
    await this.initialiseService(event);
  }


}
