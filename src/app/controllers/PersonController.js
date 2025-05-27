import { PersonService } from "../services/PersonService.js";

export class PersonController {
  constructor() {
    this.service = new PersonService();
  }

  async findAll(req, res) {
    try {
      const people = await this.service.findAll();
      res.json(people);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
