import { CompetitionService } from "../services/CompetitionService.js";

export class CompetitionController {
  constructor() {
    this.service = new CompetitionService();
  }

  async findById(req, res) {
    try {
      const competition = await this.service.findById(req.params.id);
      res.json(competition);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const competitions = await this.service.findAll();
      res.json(competitions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
