export class Result {
  constructor({
    id,
    competition_id,
    modality_id,
    placement,
    competitors_count,
  }) {
    this.id = id;
    this.competition_id = competition_id;
    this.modality_id = modality_id;
    this.placement = placement;
    this.competitors_count = competitors_count;
  }
}
