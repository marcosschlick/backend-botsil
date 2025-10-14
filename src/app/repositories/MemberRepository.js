import pool from "../../database/database.js";
import { Member } from "../entities/Member.js";

export class MemberRepository {
  async findById(id) {
    const query = "SELECT * FROM members WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new Member(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM members WHERE is_active = true";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Member(row));
  }
}
