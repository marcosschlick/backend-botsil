import { CompetitionPhotoRepository } from "../repositories/CompetitionPhotoRepository.js";
import { v4 as uuidv4 } from "uuid";

export class CompetitionPhotoService {
  constructor() {
    this.repository = new CompetitionPhotoRepository();
  }

  async create(photoData) {
    if (!photoData.competition_id || !photoData.photo_url) {
      throw new Error(
        "The fields 'competition_id' (competition) and 'photo_url' (photo URL) are required."
      );
    }
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
