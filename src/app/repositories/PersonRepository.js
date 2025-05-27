import pool from "../../database/database.js";
import { Person } from "../entities/Person.js";

export class PersonRepository {
  async findAll() {
    const query = "SELECT * FROM persons";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Person(row));
  }
}
