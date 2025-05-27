import { CompetitionPhotoRepository } from "../repositories/CompetitionPhotoRepository.js";
import { v4 as uuidv4 } from "uuid";

export class CompetitionPhotoService {
  constructor() {
    this.repository = new CompetitionPhotoRepository();
  }

  async findAll() {
    return this.repository.findAll();
  }
}
