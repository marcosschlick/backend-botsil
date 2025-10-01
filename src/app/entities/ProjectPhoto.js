export class ProjectPhoto {
  constructor({ id, project_id, photo_url, caption, is_primary }) {
    this.id = id;
    this.project_id = project_id;
    this.photo_url = photo_url;
    this.caption = caption;
    this.is_primary = is_primary;
  }
}
