import pool from "../../database/database.js";
import { CompetitionPhoto } from "../entities/CompetitionPhoto.js";

export class CompetitionPhotoRepository {
  async findByCompetition(competition_id) {
    const query = "SELECT * FROM competitions_photos WHERE competition_id = $1";
    const { rows } = await pool.query(query, [competition_id]);
    return rows.map((row) => new CompetitionPhoto(row));
  }
}
