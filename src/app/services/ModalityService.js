import { ModalityRepository } from "../repositories/ModalityRepository.js";
import { v4 as uuidv4 } from "uuid";

export class ModalityService {
  constructor() {
    this.repository = new ModalityRepository();
  }

  async create(modalityData) {
    if (!modalityData.name) {
      throw new Error("The field 'name' is required.");
    }
    modalityData.id = modalityData.id || uuidv4();
    return this.repository.create(modalityData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }
}
