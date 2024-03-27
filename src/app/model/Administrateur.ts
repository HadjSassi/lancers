import {Previliege} from "./Previliege";

export class Administrateur{
  private email !: string;
  private privileges !: Previliege[]


  constructor(email: string, privileges: Previliege[]) {
    this.email = email;
    this.privileges = privileges;
  }


  get getEmail(): string {
    return this.email;
  }

  set setEmail(value: string) {
    this.email = value;
  }

  get getPrivileges(): Previliege[] {
    return this.privileges;
  }

  set setPrivileges(value: Previliege[]) {
    this.privileges = value;
  }
}



