import { CompetitionRepository } from "../repositories/CompetitionRepository.js";

export class CompetitionService {
  constructor() {
    this.repository = new CompetitionRepository();
  }

  async findById(id) {
    return this.repository.findById(id);
  }

  async findAll() {
    return this.repository.findAll();
  }
}
