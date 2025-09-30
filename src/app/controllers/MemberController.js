import { MemberService } from "../services/MemberService.js";

export class MemberController {
  constructor() {
    this.service = new MemberService();
  }

  async findById(req, res) {
    try {
      const member = await this.service.findById(req.params.id);
      res.json(member);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const members = await this.service.findAll();
      res.json(members);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
