import { ArticleService } from "../services/ArticleService.js";

export class ArticleController {
  constructor() {
    this.service = new ArticleService();
  }

  async findAll(req, res) {
    try {
      const articles = await this.service.findAll();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
