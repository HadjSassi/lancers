import {Component, OnInit} from '@angular/core';
import {Contracts} from "../../../../model/Contracts";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {

  //there is two type of contracts: the contracts as a lancer Contracts and contracts as a buyer Contracts

  lancerContracts : Contracts[] = [];
  buyerContracts : Contracts[] = [];

  constructor() { }

  ngOnInit() {
    this.lancerContracts.push(
      new Contracts("test")
    );
    this.buyerContracts.push(
      new Contracts("test")
    );
    this.buyerContracts.push(
      new Contracts("test")
    );
    this.buyerContracts.push(
      new Contracts("test")
    );
  }


}
