import { PhotoRepository } from "../repositories/PhotoRepository.js";

export class PhotoService {
  constructor() {
    this.repository = new PhotoRepository();
  }

  async findByType(type) {
    return this.repository.findByType(type);
  }
}
