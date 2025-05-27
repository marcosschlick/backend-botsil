import { ArticleRepository } from "../repositories/ArticleRepository.js";
import { v4 as uuidv4 } from "uuid";

export class ArticleService {
  constructor() {
    this.repository = new ArticleRepository();
  }

  async findAll() {
    return this.repository.findAll();
  }
}
