import {Component, OnInit} from '@angular/core';
import {Contracts} from "../../../model/Contracts";
import {ProfileService} from "../../../services/Profile/profile.service";
import {Profile} from "../../../model/Profile";
import {Sexe} from "../../../model/Sexe";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {

  //there is two type of contracts: the contracts as a lancer Contracts and contracts as a buyer Contracts

  lancerContracts : Contracts[] = [];
  buyerContracts : Contracts[] = [];

  constructor(private service: ProfileService) { }

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

    /*const comment :Commentaire = new Commentaire(
      "test5@test.test",
      5,
      "helloWorld again!",
      new Date(12,12,2022)
    );


    // this.service.comment_read_all_().subscribe((result)=>{console.log(result);});

    // this.service.get_comments_by_email_("test@test.test").subscribe((result)=>{console.log(result);});

    // this.service.get_comments_by_service_id_(6).subscribe((result)=>{console.log(result);});

    // this.service.comment_write_(comment).subscribe((result)=>{console.log(result);});

    // this.service.comment_update_(
    //   5,"test5@test.test",new Date(12,12,2022),comment
    // ).subscribe((result)=>{console.log(result);});

    // this.service.comment_delete_(5,"test5@test.test",new Date(12,12,2022)).subscribe((result)=>{console.log(result);});
*/

    /*// this.service.contract_read_all_().subscribe(
    //   (result)=>{console.log(result);}
    // );

    // this.service.get_contract_by_service_and_email_and_etat_(5,"test@test.test","Retard").subscribe(
    //   (result)=>{console.log(result);}
    // );

    const contract : Contracts = new Contracts(6,"test1@test.test",3,new Date(),new Date(),25, Etat.Approved);

    // this.service.contract_write_(contract).subscribe(
    //   (result)=>{console.log(result);}
    // );

    // this.service.contract_update_(6,contract).subscribe(
    //   (result)=>{console.log(result);}
    // );

    // this.service.contract_delete_(6).subscribe(
    //   (result)=>{console.log(result);}
    // );*/

    /*// this.service.lancer_read_all_().subscribe(
    //   (result)=>{console.log(result);}
    // );

    const lancer : Lancer = new Lancer("test1@test.test",20,
      [new Skill("Taekwondo")],""
      );

    // this.service.lancer_write_(lancer).subscribe(
    //   (result)=>{console.log(result);}
    // );

    // this.service.lancer_update_("test1@test.test",lancer).subscribe((result)=>{console.log(result);});

    // this.service.get_lancer_by_email_("test1@test.test").subscribe((result)=>{console.log(result);});

    // this.service.lancer_delete_("test1@test.test").subscribe((res)=>{console.log(res);});
*/

    /*// this.service.profile_read_all_().subscribe(
    //   (result)=>{console.log(result);}
    // );

    const lancer : Profile = new Profile(
      false,
      "test1@test.test",
      "test",
      "test",
      "test",
      51907825,
      "",
      "Stuent",
      new Date(2000 , 5 , 9),
      Sexe.Male,
      "","","",
      ["bla bla"],
      ""
      );

    // this.service.profile_write_(lancer).subscribe(
    //   (result)=>{console.log(result);}
    // );

    // this.service.profile_update_("test1@test.test",lancer).subscribe((result)=>{console.log(result);});

    // this.service.profile_get_by_email_("test1@test.test").subscribe((result)=>{console.log(result);});

    // this.service.profile_delete_("test1@test.test").subscribe((res)=>{console.log(res);});*/

    //todo project, Restriction, Services, and skill if you want
    //todo make the services works perfectly
    //todo make the contracts works perfectly



  }


}
