enum Etat {
  Attente,
  EnCours,
  Fini,
  Retard,
  Rejected,
  Approved
}

export class Contracts {

  private _id !: number;
  private _email !: string;
  private _idService !: number;
  private _dateDebut !: Date;
  private _dateLivraison !: Date;
  private _prix !: number;
  private _etat !: Etat;


  constructor(id: number, email: string, idService: number, dateDebut: Date, dateLivraison: Date, prix: number, etat: Etat) {
    this._id = id;
    this._email = email;
    this._idService = idService;
    this._dateDebut = dateDebut;
    this._dateLivraison = dateLivraison;
    this._prix = prix;
    this._etat = etat;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get idService(): number {
    return this._idService;
  }

  set idService(value: number) {
    this._idService = value;
  }

  get dateDebut(): Date {
    return this._dateDebut;
  }

  set dateDebut(value: Date) {
    this._dateDebut = value;
  }

  get dateLivraison(): Date {
    return this._dateLivraison;
  }

  set dateLivraison(value: Date) {
    this._dateLivraison = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }

  get etat(): Etat {
    return this._etat;
  }

  set etat(value: Etat) {
    this._etat = value;
  }
}
