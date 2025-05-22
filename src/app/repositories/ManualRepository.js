import pool from "../../database/database.js";
import { Manual } from "../entities/Manual.js";

export class ManualRepository {
  async create(manualData) {
    const query = `
    INSERT INTO manual (id, modality_id, document_url)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
    const values = [
      manualData.id,
      manualData.modality_id,
      manualData.document_url,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0] ? new Manual(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM manual";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Manual(row));
  }

  async findById(id) {
    const query = "SELECT * FROM manual WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0] ? new Manual(rows[0]) : null;
  }
}
