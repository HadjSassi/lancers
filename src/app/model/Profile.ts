import { Sexe } from "./Sexe";

export class Profile {
  private isAdmin!: boolean;
  private email!: string;
  private password!: string;
  private nom!: string;
  private prenom!: string;
  private phone!: number;
  private adresse!: string;
  private fonction!: string;
  private birthday!: Date;
  private sexe!: Sexe;
  private facebook!: string;
  private linkedin!: string;
  private github!: string;
  private liens!: string[];
  private photoProfile!: string;

  constructor(isAdmin: boolean, email: string, password: string, nom: string, prenom: string, phone: number, adresse: string, fonction: string, birthday: Date, sexe: Sexe, facebook: string, linkedin: string, github: string, liens: string[], photoProfile: string) {
    this.isAdmin = isAdmin;
    this.email = email;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
    this.phone = phone;
    this.adresse = adresse;
    this.fonction = fonction;
    this.birthday = birthday;
    this.sexe = sexe;
    this.facebook = facebook;
    this.linkedin = linkedin;
    this.github = github;
    this.liens = liens;
    this.photoProfile = photoProfile;
  }

  getIsAdmin(): boolean {
    return this.isAdmin;
  }

  setIsAdmin(value: boolean) {
    this.isAdmin = value;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(value: string) {
    this.email = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string) {
    this.password = value;
  }

  getNom(): string {
    return this.nom;
  }

  setNom(value: string) {
    this.nom = value;
  }

  getPrenom(): string {
    return this.prenom;
  }

  setPrenom(value: string) {
    this.prenom = value;
  }

  getPhone(): number {
    return this.phone;
  }

  setPhone(value: number) {
    this.phone = value;
  }

  getAdresse(): string {
    return this.adresse;
  }

  setAdresse(value: string) {
    this.adresse = value;
  }

  getFonction(): string {
    return this.fonction;
  }

  setFonction(value: string) {
    this.fonction = value;
  }

  getBirthday(): Date {
    return this.birthday;
  }

  setBirthday(value: Date) {
    this.birthday = value;
  }

  getSexe(): Sexe {
    return this.sexe;
  }

  setSexe(value: Sexe) {
    this.sexe = value;
  }

  getFacebook(): string {
    return this.facebook;
  }

  setFacebook(value: string) {
    this.facebook = value;
  }

  getLinkedin(): string {
    return this.linkedin;
  }

  setLinkedin(value: string) {
    this.linkedin = value;
  }

  getGithub(): string {
    return this.github;
  }

  setGithub(value: string) {
    this.github = value;
  }

  getLiens(): string[] {
    return this.liens;
  }

  setLiens(value: string[]) {
    this.liens = value;
  }

  getPhotoProfile(): string {
    return this.photoProfile;
  }

  setPhotoProfile(value: string) {
    this.photoProfile = value;
  }
}
