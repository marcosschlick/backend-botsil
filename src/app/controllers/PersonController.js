import { PersonService } from "../services/PersonService.js";

export class PersonController {
  constructor() {
    this.service = new PersonService();
  }
  async create(req, res) {
    try {
      const newPerson = await this.service.create(req.body);
      res.status(201).json(newPerson);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const people = await this.service.getAll();
      res.json(people);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const person = await this.service.getById(req.params.personId);
      if (!person) return res.status(404).json({ error: "Person not found" });
      res.json(person);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
