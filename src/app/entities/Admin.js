export class Admin {
  constructor({ id, person_id, password_hash }) {
    this.id = id;
    this.person_id = person_id;
    this.password_hash = password_hash;
  }
}
