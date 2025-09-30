import pool from "../../database/database.js";
import { ProjectPhoto } from "../entities/ProjectPhoto.js";

export class ProjectPhotoRepository {
  async findByProject(project_id) {
    const query = "SELECT * FROM projects_photos WHERE project_id = $1";
    const { rows } = await pool.query(query, [project_id]);
    return rows.map((row) => new ProjectPhoto(row));
  }
}
