import { AdminRepository } from "../repositories/AdminRepository.js";
import { v4 as uuidv4 } from "uuid";

export class AdminService {
  constructor() {
    this.repository = new AdminRepository();
  }

  async create(adminData) {
    if (!adminData.person_id || !adminData.password) {
      throw new Error(
        "The fields 'person_id' (person) and 'password' are required."
      );
    }
    const saltRounds = 10;
    adminData.password_hash = await bcrypt.hash(adminData.password, saltRounds);
    adminData.id = adminData.id || uuidv4();
    return this.repository.create(adminData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }
}
