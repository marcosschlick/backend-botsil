import { CompetitionPhotoService } from "../services/CompetitionPhotoService.js";

export class CompetitionPhotoController {
  constructor() {
    this.service = new CompetitionPhotoService();
  }

  async findByCompetition(req, res) {
    try {
      const photos = await this.service.findByCompetition(
        req.params.competition_id
      );
      res.json(photos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findByCompetitionAndIsPrimary(req, res) {
    try {
      const photos = await this.service.findByCompetitionAndIsPrimary(
        req.params.competition_id
      );
      res.json(photos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
