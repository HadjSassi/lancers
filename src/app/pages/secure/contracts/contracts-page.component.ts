import {Component, OnInit} from '@angular/core';
import {Contracts} from "../../../model/Contracts";
import {AdministrateurService} from "../../../services/Administrateur/administrateur.service";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {

  //there is two type of contracts: the contracts as a lancer Contracts and contracts as a buyer Contracts

  lancerContracts : Contracts[] = [];
  buyerContracts : Contracts[] = [];

  constructor(private adminService: AdministrateurService) { }

  ngOnInit() {
    console.log("this is the contracts component !");
    this.adminService.admin_read_all_().subscribe(
      (result)=>{
        console.log(result);
      }
    );
  }


}
