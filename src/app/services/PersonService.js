import { PersonRepository } from "../repositories/PersonRepository.js";

export class PersonService {
  constructor() {
    this.repository = new PersonRepository();
  }

  async create(personData) {
    if (!personData.full_name || !personData.email) {
      throw new Error("Name and email are required");
    }
    return this.repository.create(personData);
  }

  async getAll() {
    return this.repository.findAll();
  }

  async getById(id) {
    return this.repository.findById(id);
  }
}
