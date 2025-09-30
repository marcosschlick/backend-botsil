export class Member {
  constructor({ id, name, role, photo_url, social_links, is_active }) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.photo_url = photo_url;
    this.social_links = social_links;
    this.is_active = is_active;
  }
}
