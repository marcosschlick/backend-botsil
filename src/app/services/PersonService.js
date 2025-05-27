import { PersonRepository } from "../repositories/PersonRepository.js";
import { v4 as uuidv4 } from "uuid";

export class PersonService {
  constructor() {
    this.repository = new PersonRepository();
  }

  async findAll() {
    return this.repository.findAll();
  }
}
