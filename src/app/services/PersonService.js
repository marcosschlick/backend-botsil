import { PersonRepository } from "../repositories/PersonRepository.js";

export class PersonService {
  constructor() {
    this.repository = new PersonRepository();
  }

  async findAll() {
    return this.repository.findAll();
  }
}
