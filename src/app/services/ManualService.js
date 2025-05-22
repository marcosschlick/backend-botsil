import { ManualRepository } from "../repositories/ManualRepository.js";

export class ManualService {
  constructor() {
    this.repository = new ManualRepository();
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }
}
