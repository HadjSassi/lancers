
export class Services {
  private _idService !: number;
  private _ownerEmail !: string;
  private _name !: string;
  private _description !: string ;
  private _score !: number;
  private _approved !: boolean;
  private _datePublication !: Date;
  private _prix !: number ;
  private _durre !: string;
  private _hidden !: boolean;


  constructor(idService: number, ownerEmail: string, name: string, description: string, score: number, approved: boolean, datePublication: Date, prix: number, durre: string, hidden: boolean) {
    this._idService = idService;
    this._ownerEmail = ownerEmail;
    this._name = name;
    this._description = description;
    this._score = score;
    this._approved = approved;
    this._datePublication = datePublication;
    this._prix = prix;
    this._durre = durre;
    this._hidden = hidden;
  }


  get idService(): number {
    return this._idService;
  }

  set idService(value: number) {
    this._idService = value;
  }

  get ownerEmail(): string {
    return this._ownerEmail;
  }

  set ownerEmail(value: string) {
    this._ownerEmail = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get approved(): boolean {
    return this._approved;
  }

  set approved(value: boolean) {
    this._approved = value;
  }

  get datePublication(): Date {
    return this._datePublication;
  }

  set datePublication(value: Date) {
    this._datePublication = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }

  get durre(): string {
    return this._durre;
  }

  set durre(value: string) {
    this._durre = value;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  set hidden(value: boolean) {
    this._hidden = value;
  }
}
