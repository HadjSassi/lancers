import { Skill } from "./Skill";

export class Lancer {
  private email!: string;
  private score!: number;
  private skills!: Skill;
  private description!: string;

  constructor(email: string, score: number, skills: Skill, description: string) {
    this.email = email;
    this.score = score;
    this.skills = skills;
    this.description = description;
  }

  get getEmail(): string {
    return this.email;
  }

  set setEmail(value: string) {
    this.email = value;
  }

  get getScore(): number {
    return this.score;
  }

  set setScore(value: number) {
    this.score = value;
  }

  get getSkills(): Skill {
    return this.skills;
  }

  set setSkills(value: Skill) {
    this.skills = value;
  }

  get getDescription(): string {
    return this.description;
  }

  set setDescription(value: string) {
    this.description = value;
  }
}
