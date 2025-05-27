import { CompetitionPhotoService } from "../services/CompetitionPhotoService.js";

export class CompetitionPhotoController {
  constructor() {
    this.service = new CompetitionPhotoService();
  }

  async findAll(req, res) {
    try {
      const photos = await this.service.findAll();
      res.json(photos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
