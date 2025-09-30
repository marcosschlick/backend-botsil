import { ProjectPhotoService } from "../services/ProjectPhotoService.js";

export class ProjectPhotoController {
  constructor() {
    this.service = new ProjectPhotoService();
  }

  async findByProject(req, res) {
    try {
      const photos = await this.service.findByProject(req.params.project_id);
      res.json(photos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
