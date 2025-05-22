import { ResultRepository } from "../repositories/ResultRepository.js";
import { v4 as uuidv4 } from "uuid";

export class ResultService {
  constructor() {
    this.repository = new ResultRepository();
  }

  async create(resultData) {
    if (
      !resultData.competition_id ||
      !resultData.modality_id ||
      !resultData.placement ||
      !resultData.competitors_count
    ) {
      throw new Error(
        "The fields 'competition_id' (competition), 'modality_id' (modality), placement and 'competitors_count' (competitors) are required."
      );
    }
    resultData.id = resultData.id || uuidv4();
    return this.repository.create(resultData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }
}
