import { Sexe } from "./Sexe";

export class Profile {
   isAdmin!: boolean;
   email!: string;
   password!: string;
   nom!: string;
   prenom!: string;
   phone!: number;
   adresse!: string;
   fonction!: string;
   birthday!: Date;
   sexe!: Sexe;
   facebook!: string;
   linkedin!: string;
   github!: string;
   liens!: string[];
   photoProfile!: string;

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

}
