import pool from "../../database/database.js";
import { Manual } from "../entities/Manual.js";

export class ManualRepository {
  async findAll() {
    const query = "SELECT * FROM manuals";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Manual(row));
  }
}
