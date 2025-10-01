import { PhotoService } from "../services/PhotoService.js";

export class PhotoController {
  constructor() {
    this.service = new PhotoService();
  }

  async findByType(req, res) {
    try {
      const photos = await this.service.findByType(req.params.id);
      res.json(photos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
