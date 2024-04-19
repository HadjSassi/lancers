import { Component, OnInit } from '@angular/core';
import {Contracts} from "../../../../model/Contracts";
import {LancerService} from "../../../../services/Lancer/lancer.service";
import {Storage} from "@ionic/storage-angular";
import {ContractService} from "../../../../services/Contract/contract.service";
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-lancer-contracts',
  templateUrl: './lancer-contracts.page.html',
  styleUrls: ['./lancer-contracts.page.scss'],
})
export class LancerContractsPage implements OnInit {
  lancerContracts : Contracts[] = [];
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
    this.contractService.get_contract_by_requestee_email_(this.userMail, this.currentDate, 0).subscribe(
      (result) => {
        loading.dismiss();
        this.lancerContracts.push(...result);
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
