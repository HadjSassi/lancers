export class Services {
  private idService!: number;
  private ownerEmail!: string;
  private name!: string;
  private description!: string ;
  private score!: number;
  private approved!: boolean;
  private datePublication!: Date;
  private prix!: number ;
  private durre!: string;
  private hidden!: boolean;

  constructor(idService: number, ownerEmail: string, name: string, description: string, score: number, approved: boolean, datePublication: Date, prix: number, durre: string, hidden: boolean) {
    this.idService = idService;
    this.ownerEmail = ownerEmail;
    this.name = name;
    this.description = description;
    this.score = score;
    this.approved = approved;
    this.datePublication = datePublication;
    this.prix = prix;
    this.durre = durre;
    this.hidden = hidden;
  }

  get getIdService(): number {
    return this.idService;
  }

  set setIdService(value: number) {
    this.idService = value;
  }

  get getOwnerEmail(): string {
    return this.ownerEmail;
  }

  set setOwnerEmail(value: string) {
    this.ownerEmail = value;
  }

  get getName(): string {
    return this.name;
  }

  set setName(value: string) {
    this.name = value;
  }

  get getDescription(): string {
    return this.description;
  }

  set setDescription(value: string) {
    this.description = value;
  }

  get getScore(): number {
    return this.score;
  }

  set setScore(value: number) {
    this.score = value;
  }

  get getApproved(): boolean {
    return this.approved;
  }

  set setApproved(value: boolean) {
    this.approved = value;
  }

  get getDatePublication(): Date {
    return this.datePublication;
  }

  set setDatePublication(value: Date) {
    this.datePublication = value;
  }

  get getPrix(): number {
    return this.prix;
  }

  set setPrix(value: number) {
    this.prix = value;
  }

  get getDurre(): string {
    return this.durre;
  }

  set setDurre(value: string) {
    this.durre = value;
  }

  get getHidden(): boolean {
    return this.hidden;
  }

  set setHidden(value: boolean) {
    this.hidden = value;
  }
}
