import {Skill} from "./Skill";

export class Lancer{
  private _email !: string ;
  private _score !: number;
  private _skills !: Skill;
  private _description !: string;


  constructor(email: string, score: number, skills: Skill, description: string) {
    this._email = email;
    this._score = score;
    this._skills = skills;
    this._description = description;
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get skills(): Skill {
    return this._skills;
  }

  set skills(value: Skill) {
    this._skills = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
