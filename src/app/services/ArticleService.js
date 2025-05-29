import { ArticleRepository } from "../repositories/ArticleRepository.js";

export class ArticleService {
  constructor() {
    this.repository = new ArticleRepository();
  }

  async findAll() {
    return this.repository.findAll();
  }
}
