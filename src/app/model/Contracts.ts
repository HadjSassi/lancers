import { Etat } from "./Etat";

export class Contracts {

  private id!: number;
  private email!: string;
  private idService!: number;
  private dateDebut!: Date;
  private dateLivraison!: Date;
  private prix!: number;
  private etat!: Etat;


  constructor(id: number, email: string, idService: number, dateDebut: Date, dateLivraison: Date, prix: number, etat: Etat) {
    this.id = id;
    this.email = email;
    this.idService = idService;
    this.dateDebut = dateDebut;
    this.dateLivraison = dateLivraison;
    this.prix = prix;
    this.etat = etat;
  }


  get getId(): number {
    return this.id;
  }

  set setId(value: number) {
    this.id = value;
  }

  get getEmail(): string {
    return this.email;
  }

  set setEmail(value: string) {
    this.email = value;
  }

  get getIdService(): number {
    return this.idService;
  }

  set setIdService(value: number) {
    this.idService = value;
  }

  get getDateDebut(): Date {
    return this.dateDebut;
  }

  set setDateDebut(value: Date) {
    this.dateDebut = value;
  }

  get getDateLivraison(): Date {
    return this.dateLivraison;
  }

  set setDateLivraison(value: Date) {
    this.dateLivraison = value;
  }

  get getPrix(): number {
    return this.prix;
  }

  set setPrix(value: number) {
    this.prix = value;
  }

  get getEtat(): Etat {
    return this.etat;
  }

  set setEtat(value: Etat) {
    this.etat = value;
  }
}
