import { ArticleRepository } from "../repositories/ArticleRepository.js";
import { v4 as uuidv4 } from "uuid";

export class ArticleService {
  constructor() {
    this.repository = new ArticleRepository();
  }

  async create(articleData) {
    if (!articleData.title || !articleData.article_url) {
      throw new Error("Title, category and URL are required");
    }
    articleData.id = articleData.id || uuidv4();
    return this.repository.create(articleData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }
}
