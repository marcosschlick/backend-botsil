export class Member {
  constructor({
    id,
    name,
    role,
    photo_url,
    instagram_link,
    github_link,
    linkedin_link,
    is_active,
  }) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.photo_url = photo_url;
    this.instagram_link = instagram_link;
    this.github_link = github_link;
    this.linkedin_link = linkedin_link;
    this.is_active = is_active;
  }
}
