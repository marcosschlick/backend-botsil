import pool from "../../database/database.js";
import { Competition } from "../entities/Competition.js";

export class CompetitionRepository {
  async create(competitionData) {
    const query = `
    INSERT INTO competition (id, name, start_date, end_date, location_address)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
    const values = [
      competitionData.id,
      competitionData.name,
      competitionData.start_date,
      competitionData.end_date,
      competitionData.location_address,
    ];
    const { rows } = await pool.query(query, values);
    return new Competition(rows[0]);
  }

  async findAll() {
    const query = "SELECT * FROM competition";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Article(row));
  }

  async findById(id) {
    const query = "SELECT * FROM competition WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0] ? new Article(rows[0]) : null;
  }
}
