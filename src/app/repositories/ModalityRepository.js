import pool from "../../database/database.js";
import { Modality } from "../entities/Modality.js";

export class ModalityRepository {
  async create(modalityData) {
    const query = `
    INSERT INTO modality (id, name)
    VALUES ($1, $2)
    RETURNING *
  `;
    const values = [modalityData.id, modalityData.name];
    const { rows } = await pool.query(query, values);
    return rows[0] ? new Modality(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM modality";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Modality(row));
  }

  async findById(id) {
    const query = "SELECT * FROM modality WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0] ? new Modality(rows[0]) : null;
  }
}
