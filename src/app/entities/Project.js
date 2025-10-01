export class Project {
  constructor({ id, name, description, status, github_link }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.github_link = github_link;
  }
}
