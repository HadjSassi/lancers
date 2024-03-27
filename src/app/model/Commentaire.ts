
export class Commentaire{
  private _email !: string;
  private _idService !: number;
  private _contenu !: string;
  private _dateComment !: Date;


  constructor(email: string, idService: number, contenu: string, dateComment: Date) {
    this._email = email;
    this._idService = idService;
    this._contenu = contenu;
    this._dateComment = dateComment;
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

  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }

  get dateComment(): Date {
    return this._dateComment;
  }

  set dateComment(value: Date) {
    this._dateComment = value;
  }
}
