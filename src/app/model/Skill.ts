export class Skill {
  [x: string]: any;
  private skill!: string;

  constructor(skill: string) {
    this.skill = skill;
  }

  get getSkill(): string {
    return this.skill;
  }

  set setSkill(value: string) {
    this.skill = value;
  }
}
