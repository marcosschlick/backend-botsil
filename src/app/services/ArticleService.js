import { ArticleRepository } from "../repositories/ArticleRepository.js";

export class ArticleService {
  constructor() {
    this.repository = new ArticleRepository();
  }

  async create(articleData) {
    if (!articleData.title || !articleData.article_url) {
      throw new Error("Title, category and URL are required");
    }
    return this.repository.create(articleData);
  }

  async getAll() {
    return this.repository.findAll();
  }

  async getById(id) {
    return this.repository.findById(id);
  }
}
