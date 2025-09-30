import pool from "../../database/database.js";
import { Project } from "../entities/Project.js";

export class ProjectRepository {
  async findById(id) {
    const query = "SELECT * FROM projects WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows.map((row) => new Project(row));
  }

  async findAll() {
    const query = "SELECT * FROM projects";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Project(row));
  }
}
