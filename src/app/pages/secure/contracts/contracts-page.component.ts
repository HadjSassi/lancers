import {Component, OnInit} from '@angular/core';
import {Contracts} from "../../../model/Contracts";
import {LancerService} from "../../../services/Lancer/lancer.service";
import {Storage} from "@ionic/storage-angular";
import {ContractService} from "../../../services/Contract/contract.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {

  //there is two type of contracts: the contracts as a lancer Contracts and contracts as a buyer Contracts


  lancerContracts : Contracts[] = [];
  buyerContracts : Contracts[] = [];
  userMail: string = "";

  constructor(private service: LancerService, private storage: Storage,
              private contractService: ContractService,private router: Router) { }

  async ngOnInit() {
    await this.storage.create();
    this.userMail = await this.storage.get('mail');
    const currentDate = new Date();
    this.contractService.get_contract_by_email_(this.userMail,currentDate.getFullYear(),currentDate.getMonth() + 1).subscribe(
      (result) =>{
        this.buyerContracts = result;
      }
    );
    this.contractService.get_contract_by_requestee_email_(this.userMail,currentDate.getFullYear(),currentDate.getMonth() + 1).subscribe(
      (result) =>{
        this.lancerContracts = result;
      }
    );
  }


  consultContract(contract:Contracts) {
    this.router.navigate([`contracts/consultation-contract/${contract.id}`],);
  }

  sellAllLancerContracts() {
    this.router.navigate([`contracts/lancer-contracts/`],);
  }

  sellAllBuyerContracts() {
    this.router.navigate([`contracts/buyer-contracts/`],);
  }
}
