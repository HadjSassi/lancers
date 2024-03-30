import { Skill } from "./Skill";

export class Lancer {
   email!: string;
   score!: number;
   skills!: Skill[];
   description!: string;

  constructor(email: string, score: number, skills: Skill[], description: string) {
    this.email = email;
    this.score = score;
    this.skills = skills;
    this.description = description;
  }

}
