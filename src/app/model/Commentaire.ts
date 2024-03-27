export class Commentaire {
  private email!: string;
  private idService!: number;
  private contenu!: string;
  private dateComment!: Date;

  constructor(email: string, idService: number, contenu: string, dateComment: Date) {
    this.email = email;
    this.idService = idService;
    this.contenu = contenu;
    this.dateComment = dateComment;
  }

  get getEmail(): string {
    return this.email;
  }

  set setEmail(value: string) {
    this.email = value;
  }

  get getIdService(): number {
    return this.idService;
  }

  set setIdService(value: number) {
    this.idService = value;
  }

  get getContenu(): string {
    return this.contenu;
  }

  set setContenu(value: string) {
    this.contenu = value;
  }

  get getDateComment(): Date {
    return this.dateComment;
  }

  set setDateComment(value: Date) {
    this.dateComment = value;
  }
}
