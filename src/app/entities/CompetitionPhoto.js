export class CompetitionPhoto {
  constructor({ id, competition_id, photo_url, description }) {
    this.id = id;
    this.competition_id = competition_id;
    this.photo_url = photo_url;
    this.description = description;
  }
}
