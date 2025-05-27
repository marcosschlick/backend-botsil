import { ManualRepository } from "../repositories/ManualRepository.js";
import { v4 as uuidv4 } from "uuid";

export class ManualService {
  constructor() {
    this.repository = new ManualRepository();
  }

  async findAll() {
    return this.repository.findAll();
  }
}
