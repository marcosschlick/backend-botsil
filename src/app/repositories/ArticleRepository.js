import pool from "../../database/database.js";
import { Article } from "../entities/Article.js";

export class ArticleRepository {
  async create(articleData) {
    const query = `
      INSERT INTO article (title, language, publication_date, article_url)
      VALUES ($1, $2, $3, $)
      RETURNING *
    `;
    const values = [
      articleData.title,
      articleData.language,
      articleData.publication_date,
      articleData.article_url,
    ];
    const { rows } = await pool.query(query, values);
    return new Article(rows[0]);
  }

  async findAll() {
    const query = "SELECT * FROM article";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Article(row));
  }

  async findById(id) {
    const query = "SELECT * FROM article WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0] ? new Article(rows[0]) : null;
  }
}
