export class Project {
  constructor({ id, name, description, status, social_links }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.social_links = social_links;
  }
}
