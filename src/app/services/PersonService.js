import { PersonRepository } from "../repositories/PersonRepository.js";
import { v4 as uuidv4 } from "uuid";

export class PersonService {
  constructor() {
    this.repository = new PersonRepository();
  }

  async create(personData) {
    if (!personData.full_name || !personData.email) {
      throw new Error(
        "The fields 'full_name' (full name) and 'email' are required."
      );
    }
    personData.id = personData.id || uuidv4();
    return this.repository.create(personData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }
}
