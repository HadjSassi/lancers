import { Component, OnInit } from '@angular/core';
import {Contracts} from "../../../../model/Contracts";
import {PreloadAllModules,ActivatedRoute, Router} from "@angular/router";
import {LancerService} from "../../../../services/Lancer/lancer.service";
import {Storage} from "@ionic/storage-angular";
import {ContractService} from "../../../../services/Contract/contract.service";
import {LoadingController,InfiniteScrollCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-buyer-contracts',
  templateUrl: './buyer-contracts.page.html',
  styleUrls: ['./buyer-contracts.page.scss'],
})
export class BuyerContractsPage implements OnInit {

  buyerContracts : Contracts[] = [];
  userMail: string = "";
  currentDate : number = new Date().getFullYear();

  constructor(private service: LancerService, private storage: Storage,
              private contractService: ContractService,private router: Router,
              private loadingCtrl:LoadingController) { }

  async ngOnInit() {
    await this.storage.create();
    this.userMail = await this.storage.get('mail');
    await this.loadMovies();
  }


  consultContract(contract:Contracts) {
    this.router.navigate([`contracts/consultation-contract/${contract.id}`],);
  }

  async loadMovies(event?: any) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    this.contractService.get_contract_by_email_(this.userMail, this.currentDate, 0).subscribe(
      (result) => {
        loading.dismiss();
        this.buyerContracts.push(...result);
        if (event) {
          event.target.complete();
          event.target.disabled = this.currentDate == 2015;
        }
      }
    );
  }

  async loadMore(event: any) {
    this.currentDate--; // Decrease currentDate to load older contracts
    await this.loadMovies(event);
  }

}
