export class Competition {
  constructor({
    id,
    name,
    description,
    result,
    initial_date,
    final_date,
    location,
    status,
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.result = result;
    this.initial_date = initial_date;
    this.final_date = final_date;
    this.location = location;
    this.status = status;
  }
}
