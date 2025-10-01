import { ProjectPhotoRepository } from "../repositories/ProjectPhotoRepository.js";

export class ProjectPhotoService {
  constructor() {
    this.repository = new ProjectPhotoRepository();
  }

  async findByProject(project_id) {
    return this.repository.findByProject(project_id);
  }

  async findByProjectAndIsPrimary(project_id) {
    return this.repository.findByProjectAndIsPrimary(project_id);
  }
}
