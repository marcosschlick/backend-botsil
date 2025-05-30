import { CompetitionPhotoRepository } from "../repositories/CompetitionPhotoRepository.js";

export class CompetitionPhotoService {
  constructor() {
    this.repository = new CompetitionPhotoRepository();
  }

  async findAll() {
    return this.repository.findAll();
  }
}
