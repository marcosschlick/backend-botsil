import pool from "../../database/database.js";
import { Article } from "../entities/Article.js";

export class ArticleRepository {
  async findAll() {
    const query = "SELECT * FROM articles";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Article(row));
  }
}
