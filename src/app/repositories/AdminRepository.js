import pool from "../../database/database.js";
import { Admin } from "../entities/Admin.js";

export class AdminRepository {
  async create(adminData) {
    const query = `
    INSERT INTO admin (id, person_id, password_hash)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
    const values = [adminData.id, adminData.person_id, adminData.password_hash];
    const { rows } = await pool.query(query, values);
    return rows[0] ? new Admin(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM admin";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Admin(row));
  }

  async findById(id) {
    const query = "SELECT * FROM admin WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0] ? new Admin(rows[0]) : null;
  }
}
