import pool from "../../database/database.js";
import { CompetitionPhoto } from "../entities/CompetitionPhoto.js";

export class CompetitionPhotoRepository {
  async findAll() {
    const query = "SELECT * FROM competition_photos";
    const { rows } = await pool.query(query);
    return rows.map((row) => new CompetitionPhoto(row));
  }
}
