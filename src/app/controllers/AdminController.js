import { AdminService } from "../services/AdminService.js";

export class AdminController {
  constructor() {
    this.service = new AdminService();
  }

  async create(req, res) {
    try {
      const newAdmin = await this.service.create(req.body);
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const admins = await this.service.findAll();
      res.json(admins);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const admin = await this.service.findById(req.params.adminId);
      if (!admin) return res.status(404).json({ error: "Admin not found" });
      res.json(admin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
