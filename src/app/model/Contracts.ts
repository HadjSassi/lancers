import { Etat } from "./Etat";
import { Services } from "./Services";

export class Contracts {

  public id!: number;
  public email!: string;
  public idService!: number;
  public dateDebut!: Date;
  public dateLivraison!: Date;
  public prix!: number;
  public etat!: Etat;
  public link!: string;
  public service: Services;


  constructor(id: number, email: string, idService: number, dateDebut: Date, dateLivraison: Date, prix: number, etat: Etat, service: Services, link:string) {
    this.id = id;
    this.email = email;
    this.idService = idService;
    this.dateDebut = dateDebut;
    this.dateLivraison = dateLivraison;
    this.prix = prix;
    this.etat = etat;
    this.service = service;
    this.link = link;
  }

}
