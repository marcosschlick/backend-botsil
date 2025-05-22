import { ModalityService } from "../services/ModalityService.js";

export class ModalityController {
  constructor() {
    this.service = new ModalityService();
  }

  async create(req, res) {
    try {
      const newModality = await this.service.create(req.body);
      res.status(201).json(newModality);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const modalities = await this.service.findAll();
      res.json(modalities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const modality = await this.service.findById(req.params.modalityId);
      if (!modality)
        return res.status(404).json({ error: "Modality not found" });
      res.json(modality);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
