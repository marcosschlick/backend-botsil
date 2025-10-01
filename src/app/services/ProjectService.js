import { ProjectRepository } from "../repositories/ProjectRepository.js";

export class ProjectService {
  constructor() {
    this.repository = new ProjectRepository();
  }

  async findById(id) {
    return this.repository.findById(id);
  }

  async findAll() {
    return this.repository.findAll();
  }
}
