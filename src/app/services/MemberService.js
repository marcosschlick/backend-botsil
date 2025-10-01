import { MemberRepository } from "../repositories/MemberRepository.js";

export class MemberService {
  constructor() {
    this.repository = new MemberRepository();
  }

  async findById(id) {
    return this.repository.findById(id);
  }

  async findAll() {
    return this.repository.findAll();
  }
}
