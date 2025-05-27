import { ManualService } from "../services/ManualService.js";

export class ManualController {
  constructor() {
    this.service = new ManualService();
  }

  async findAll(req, res) {
    try {
      const manuals = await this.service.findAll();
      res.json(manuals);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
