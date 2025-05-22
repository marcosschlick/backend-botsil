import { ArticleService } from "../services/ArticleService.js";

export class ArticleController {
  constructor() {
    this.service = new ArticleService();
  }

  async create(req, res) {
    try {
      const newArticle = await this.service.create(req.body);
      res.status(201).json(newArticle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const articles = await this.service.findAll();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const article = await this.service.findById(req.params.articleId);
      if (!article) return res.status(404).json({ error: "Article not found" });
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
