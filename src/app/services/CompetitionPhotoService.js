import { CompetitionPhotoRepository } from "../repositories/CompetitionPhotoRepository.js";

export class CompetitionPhotoService {
  constructor() {
    this.repository = new CompetitionPhotoRepository();
  }

  async findByCompetition(competition_id) {
    return this.repository.findByCompetition(competition_id);
  }
}
