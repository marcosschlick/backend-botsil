import pool from "../../database/database.js";
import { CompetitionPhoto } from "../entities/CompetitionPhoto.js";

export class CompetitionPhotoRepository {
  async create(photoData) {
    const query = `
    INSERT INTO competition_photo (id, competition_id, photo_url, description)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
    const values = [
      photoData.id,
      photoData.competition_id,
      photoData.photo_url,
      photoData.description,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0] ? new CompetitionPhoto(rows[0]) : null;
  }

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
