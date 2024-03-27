export class Restriction {
  private idRestriction!: number;
  private lancerEmail!: string;
  private debut!: Date;
  private fin!: Date;
  private raison!: string;
  private enExecution!: boolean;

  constructor(idRestriction: number, lancerEmail: string, debut: Date, fin: Date, raison: string, enExecution: boolean) {
    this.idRestriction = idRestriction;
    this.lancerEmail = lancerEmail;
    this.debut = debut;
    this.fin = fin;
    this.raison = raison;
    this.enExecution = enExecution;
  }

  get getIdRestriction(): number {
    return this.idRestriction;
  }

  set setIdRestriction(value: number) {
    this.idRestriction = value;
  }

  get getLancerEmail(): string {
    return this.lancerEmail;
  }

  set setLancerEmail(value: string) {
    this.lancerEmail = value;
  }

  get getDebut(): Date {
    return this.debut;
  }

  set setDebut(value: Date) {
    this.debut = value;
  }

  get getFin(): Date {
    return this.fin;
  }

  set setFin(value: Date) {
    this.fin = value;
  }

  get getRaison(): string {
    return this.raison;
  }

  set setRaison(value: string) {
    this.raison = value;
  }

  get getEnExecution(): boolean {
    return this.enExecution;
  }

  set setEnExecution(value: boolean) {
    this.enExecution = value;
  }
}
