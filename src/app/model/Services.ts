export class Services {
   idService!: number;
   ownerEmail!: string;
   name!: string;
   description!: string ;
   score!: number;
   approved!: boolean;
   datePublication!: Date;
   prix!: number ;
   durre!: string;
   hidden!: boolean;

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

}
