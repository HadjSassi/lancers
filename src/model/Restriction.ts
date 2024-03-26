export class Restriction{
  private _idRestriction !: number;
  private _lancerEmail !: string;
  private _debut !: Date;
  private _fin !: Date;
  private _raison !: string;
  private _enExecution !: boolean;


  constructor(idRestriction: number, lancerEmail: string, debut: Date, fin: Date, raison: string, enExecution: boolean) {
    this._idRestriction = idRestriction;
    this._lancerEmail = lancerEmail;
    this._debut = debut;
    this._fin = fin;
    this._raison = raison;
    this._enExecution = enExecution;
  }


  get idRestriction(): number {
    return this._idRestriction;
  }

  set idRestriction(value: number) {
    this._idRestriction = value;
  }

  get lancerEmail(): string {
    return this._lancerEmail;
  }

  set lancerEmail(value: string) {
    this._lancerEmail = value;
  }

  get debut(): Date {
    return this._debut;
  }

  set debut(value: Date) {
    this._debut = value;
  }

  get fin(): Date {
    return this._fin;
  }

  set fin(value: Date) {
    this._fin = value;
  }

  get raison(): string {
    return this._raison;
  }

  set raison(value: string) {
    this._raison = value;
  }

  get enExecution(): boolean {
    return this._enExecution;
  }

  set enExecution(value: boolean) {
    this._enExecution = value;
  }
}
