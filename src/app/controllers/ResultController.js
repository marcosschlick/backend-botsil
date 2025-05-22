import { ResultService } from "../services/ResultService.js";

export class ResultController {
  constructor() {
    this.service = new ResultService();
  }

  async create(req, res) {
    try {
      const newResult = await this.service.create(req.body);
      res.status(201).json(newResult);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const results = await this.service.findAll();
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const result = await this.service.findById(req.params.resultId);
      if (!result) return res.status(404).json({ error: "Result not found" });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
