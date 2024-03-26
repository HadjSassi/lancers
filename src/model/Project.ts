import {images, link} from "ionicons/icons";

export class Project{
  private _idProject !: number;
  private _ownerEmail !: string;
  private _name !: string;
  private _description !: string;
  private _link !: string[];
  private _images !: string[];
  private _iframes !: string[];


  constructor(idProject: number, ownerEmail: string, name: string, description: string, link: string[], images: string[], iframes: string[]) {
    this._idProject = idProject;
    this._ownerEmail = ownerEmail;
    this._name = name;
    this._description = description;
    this._link = link;
    this._images = images;
    this._iframes = iframes;
  }


  get idProject(): number {
    return this._idProject;
  }

  set idProject(value: number) {
    this._idProject = value;
  }

  get ownerEmail(): string {
    return this._ownerEmail;
  }

  set ownerEmail(value: string) {
    this._ownerEmail = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get link(): string[] {
    return this._link;
  }

  set link(value: string[]) {
    this._link = value;
  }

  get images(): string[] {
    return this._images;
  }

  set images(value: string[]) {
    this._images = value;
  }

  get iframes(): string[] {
    return this._iframes;
  }

  set iframes(value: string[]) {
    this._iframes = value;
  }
}
