import { CompetitionPhotoRepository } from "../repositories/CompetitionPhotoRepository.js";
import { v4 as uuidv4 } from "uuid";

export class CompetitionPhotoService {
  constructor() {
    this.repository = new CompetitionPhotoRepository();
  }

  async create(photoData) {
    photoData.id = photoData.id || uuidv4();
    return this.repository.create(photoData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }
}
