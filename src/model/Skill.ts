export class Skill{
    private _skill !: string;

  constructor(skill: string) {
    this._skill = skill;
  }


  get skill(): string {
    return this._skill;
  }

  set skill(value: string) {
    this._skill = value;
  }
}
