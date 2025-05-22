import { CompetitionRepository } from "../repositories/CompetitionRepository.js";
import { v4 as uuidv4 } from "uuid";

export class CompetitionService {
  constructor() {
    this.repository = new CompetitionRepository();
  }

  async create(competitionData) {
    if (
      !competitionData.name ||
      !competitionData.start_date ||
      !competitionData.end_date ||
      !competitionData.location_address
    ) {
      throw new Error(
        "The fields 'name', 'start_date' (start date), 'end_date' (end date), and 'location_address' (address) are required."
      );
    }
    competitionData.id = competitionData.id || uuidv4();
    return this.repository.create(competitionData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }
}
