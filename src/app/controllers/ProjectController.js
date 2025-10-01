import { ProjectService } from "../services/ProjectService.js";

export class ProjectController {
  constructor() {
    this.service = new ProjectService();
  }

  async findById(req, res) {
    try {
      const project = await this.service.findById(req.params.id);
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const projects = await this.service.findAll();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
