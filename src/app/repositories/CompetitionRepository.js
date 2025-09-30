import pool from "../../database/database.js";
import { Competition } from "../entities/Competition.js";

export class CompetitionRepository {
  async findById(id) {
    const query = "SELECT * FROM competitions WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows.map((row) => new Competition(row));
  }

  async findAll() {
    const query = "SELECT * FROM competitions";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Competition(row));
  }
}
