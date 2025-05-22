import pool from "../../database/database.js";
import { Person } from "../entities/Person.js";

export class PersonRepository {
  async create(personData) {
    const query = `
    INSERT INTO person (id, full_name, email, phone, birth_date, profile_image_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `;
    const values = [
      personData.id,
      personData.full_name,
      personData.email,
      personData.phone,
      personData.birth_date,
      personData.profile_image_url,
    ];
    const { rows } = await pool.query(query, values);
    return new Person(rows[0]);
  }

  async findAll() {
    const query = "SELECT * FROM person";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Person(row));
  }

  async findById(id) {
    const query = "SELECT * FROM person WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0] ? new Person(rows[0]) : null;
  }
}
