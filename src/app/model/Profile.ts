enum Sexe {
  Male,
  Female,
  Other
}

export class Profile{
  private _isAdmin !: boolean;
  private _email !: string;
  private _password !: string;
  private _nom !: string;
  private _prenom !: string;
  private _phone !: number;
  private _adresse !: string;
  private _fonction !: string;
  private _birthday !: Date ;
  private _sexe !: Sexe ;
  private _facebook !: string;
  private _linkedin !: string;
  private _github !: string;
  private _liens !: string[];
  private _photoProfile !: string;


  constructor(isAdmin: boolean, email: string, password: string, nom: string, prenom: string, phone: number, adresse: string, fonction: string, birthday:Date, sexe: Sexe, facebook: string, linkedin: string, github: string, liens: string[], photoProfile: string) {
    this._isAdmin = isAdmin;
    this._email = email;
    this._password = password;
    this._nom = nom;
    this._prenom = prenom;
    this._phone = phone;
    this._adresse = adresse;
    this._fonction = fonction;
    this._birthday = birthday;
    this._sexe = sexe;
    this._facebook = facebook;
    this._linkedin = linkedin;
    this._github = github;
    this._liens = liens;
    this._photoProfile = photoProfile;
  }


  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get phone(): number {
    return this._phone;
  }

  set phone(value: number) {
    this._phone = value;
  }

  get adresse(): string {
    return this._adresse;
  }

  set adresse(value: string) {
    this._adresse = value;
  }

  get fonction(): string {
    return this._fonction;
  }

  set fonction(value: string) {
    this._fonction = value;
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(value: Date) {
    this._birthday = value;
  }

  get sexe(): Sexe {
    return this._sexe;
  }

  set sexe(value: Sexe) {
    this._sexe = value;
  }

  get facebook(): string {
    return this._facebook;
  }

  set facebook(value: string) {
    this._facebook = value;
  }

  get linkedin(): string {
    return this._linkedin;
  }

  set linkedin(value: string) {
    this._linkedin = value;
  }

  get github(): string {
    return this._github;
  }

  set github(value: string) {
    this._github = value;
  }

  get liens(): string[] {
    return this._liens;
  }

  set liens(value: string[]) {
    this._liens = value;
  }

  get photoProfile(): string {
    return this._photoProfile;
  }

  set photoProfile(value: string) {
    this._photoProfile = value;
  }
}

