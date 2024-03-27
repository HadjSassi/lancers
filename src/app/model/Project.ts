export class Project {
  private idProject!: number;
  private ownerEmail!: string;
  private name!: string;
  private description!: string;
  private link!: string[];
  private images!: string[];
  private iframes!: string[];

  constructor(idProject: number, ownerEmail: string, name: string, description: string, link: string[], images: string[], iframes: string[]) {
    this.idProject = idProject;
    this.ownerEmail = ownerEmail;
    this.name = name;
    this.description = description;
    this.link = link;
    this.images = images;
    this.iframes = iframes;
  }

  get getIdProject(): number {
    return this.idProject;
  }

  set setIdProject(value: number) {
    this.idProject = value;
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

  get getLink(): string[] {
    return this.link;
  }

  set setLink(value: string[]) {
    this.link = value;
  }

  get getImages(): string[] {
    return this.images;
  }

  set setImages(value: string[]) {
    this.images = value;
  }

  get getIframes(): string[] {
    return this.iframes;
  }

  set setIframes(value: string[]) {
    this.iframes = value;
  }
}
