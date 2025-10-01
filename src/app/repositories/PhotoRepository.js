import pool from "../../database/database.js";
import { Photo } from "../entities/Photo.js";

export class PhotoRepository {
  async findByType(type) {
    const query = "SELECT * FROM photos WHERE type = $1";
    const { rows } = await pool.query(query, [type]);
    return rows.map((row) => new Photo(row));
  }
}
