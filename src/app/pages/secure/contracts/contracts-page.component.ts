import {Component, OnInit} from '@angular/core';
import {Contracts} from "../../../model/Contracts";
import {AdministrateurService} from "../../../services/Administrateur/administrateur.service";
import {Administrateur} from "../../../model/Administrateur";
import {Previliege} from "../../../model/Previliege";
import {Commentaire} from "../../../model/Commentaire";
import {CommentaireService} from "../../../services/Commentaire/commentaire.service";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {

  //there is two type of contracts: the contracts as a lancer Contracts and contracts as a buyer Contracts

  lancerContracts : Contracts[] = [];
  buyerContracts : Contracts[] = [];

  constructor(private service: CommentaireService) { }

  ngOnInit() {
    console.log("this is the contracts component !");

    /*// const admin: Administrateur = new Administrateur(
    //   "test5@test.test",
    //   []
    // );
    // const adminUpdate : Administrateur = new Administrateur(
    //   "test5@test.test",
    //   [Previliege.tous,Previliege.attribuerScoreLancer]
    // )
    // const email : string = "test5@test.test";


    // this.service.admin_write_(admin).subscribe((result)=>{console.log(result);});

    // this.service.admin_update_(email,adminUpdate).subscribe((result)=>{console.log(result);});

    // this.service.admin_delete_(email).subscribe((result) => {console.log(result);});

    // this.service.admin_get_by_email_(email).subscribe((result)=>{console.log(result);});

    // this.service.admin_read_all_().subscribe((result)=>{console.log(result);});*/

    const comment :Commentaire = new Commentaire(
      "test5@test.test",
      5,
      "helloWorld again!",
      new Date(12,12,2022)
    );


    // this.service.comment_read_all_().subscribe((result)=>{console.log(result);});

    this.service.get_comments_by_email_("test@test.test").subscribe((result)=>{console.log(result);});

    // this.service.comment_write_(comment).subscribe((result)=>{console.log(result);});

    // this.service.comment_update_(
    //   5,"test5@test.test",new Date(12,12,2022),comment
    // ).subscribe((result)=>{console.log(result);});

    // this.service.comment_delete_(5,"test5@test.test",new Date(12,12,2022)).subscribe((result)=>{console.log(result);});


  }


}
