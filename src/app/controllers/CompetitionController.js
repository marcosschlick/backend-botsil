import { CompetitionService } from "../services/CompetitionService.js";

export class CompetitionController {
  constructor() {
    this.service = new CompetitionService();
  }

  async create(req, res) {
    try {
      const newCompetition = await this.service.create(req.body);
      res.status(201).json(newCompetition);
    } catch (error) {
      res.status(400).json({ error: error.message });
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

  async findById(req, res) {
    try {
      const competition = await this.service.findById(req.params.competitionId);
      if (!competition)
        return res.status(404).json({ error: "Competition not found" });
      res.json(competition);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
