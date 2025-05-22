import { ManualService } from "../services/ManualService.js";

export class ManualController {
  constructor() {
    this.service = new ManualService();
  }

  async create(req, res) {
    try {
      const newManual = await this.service.create(req.body);
      res.status(201).json(newManual);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const manuals = await this.service.findAll();
      res.json(manuals);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const manual = await this.service.findById(req.params.manualId);
      if (!manual) return res.status(404).json({ error: "Manual not found" });
      res.json(manual);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
