import pool from "../../database/database.js";
import { CompetitionPhoto } from "../entities/CompetitionPhoto.js";

export class CompetitionPhotoRepository {
  async findAll() {
    const query = "SELECT * FROM competition_photo";
    const { rows } = await pool.query(query);
    return rows.map((row) => new CompetitionPhoto(row));
  }

  async findById(id) {
    const query = "SELECT * FROM competition_photo WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0] ? new CompetitionPhoto(rows[0]) : null;
  }
}
