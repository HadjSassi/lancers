import {Component, OnInit} from '@angular/core';
import {Contracts} from "../../../model/Contracts";
import {LancerService} from "../../../services/Lancer/lancer.service";
import {Storage} from "@ionic/storage-angular";
import {ContractService} from "../../../services/Contract/contract.service";

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
              private contractService: ContractService) { }

  async ngOnInit() {
    await this.storage.create();
    this.userMail = await this.storage.get('mail');
    console.log(this.userMail);
    this.contractService.get_contract_by_email_(this.userMail).subscribe(
      (result) =>{
        this.buyerContracts = result;
      }
    );
    this.contractService.get_contract_by_requestee_email_(this.userMail).subscribe(
      (result) =>{
        this.lancerContracts = result;
      }
    );
  }


}
