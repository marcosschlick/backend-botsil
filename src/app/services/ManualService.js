import { ManualRepository } from "../repositories/ManualRepository.js";
import { v4 as uuidv4 } from "uuid";

export class ManualService {
  constructor() {
    this.repository = new ManualRepository();
  }

  async create(manualData) {
    if (!manualData.modality_id || !manualData.document_url) {
      throw new Error(
        "The fields 'modality_id' (modality) and 'document_url' (document URL) are required."
      );
    }
    manualData.id = manualData.id || uuidv4();
    return this.repository.create(manualData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }
}
