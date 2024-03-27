enum Previliege {
  tous,
  validerContract,
  attribuerScoreLancer,
  attribuerScoreService,
  deverouillerLancer,
  restreindreLancer,
  supprimerLancer,
  validerService,
  modifierService,
  supprimerService
}

export class Administrateur{
  private _email !: string;
  private _privileges !: Previliege[]


  constructor(email: string, privileges: Previliege[]) {
    this._email = email;
    this._privileges = privileges;
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get privileges(): Previliege[] {
    return this._privileges;
  }

  set privileges(value: Previliege[]) {
    this._privileges = value;
  }
}


