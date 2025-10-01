export class CompetitionPhoto {
  constructor({ id, competition_id, photo_url, caption, is_primary }) {
    this.id = id;
    this.competition_id = competition_id;
    this.photo_url = photo_url;
    this.caption = caption;
    this.is_primary = is_primary;
  }
}
