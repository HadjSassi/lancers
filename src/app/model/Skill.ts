export class Skill {
  [x: string]: any;
  public skill!: string;

  constructor(skill: string) {
    this.skill = skill;
  }

  public get getSkill(): string {
    return this.skill;
  }

  public set setSkill(value: string) {
    this.skill = value;
  }
}
