import pool from "../../database/database.js";
import { Result } from "../entities/Result.js";

export class ResultRepository {
  async create(resultData) {
    const query = `
    INSERT INTO result (id, competition_id, modality_id, placement, competitors_count)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
    const values = [
      resultData.id,
      resultData.competition_id,
      resultData.modality_id,
      resultData.placement,
      resultData.competitors_count,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0] ? new Result(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM result";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Result(row));
  }

  async findById(id) {
    const query = "SELECT * FROM result WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0] ? new Result(rows[0]) : null;
  }
}
