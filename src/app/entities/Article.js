export class Article {
  constructor({
    id,
    title,
    language,
    publication_date,
    post_date,
    article_url,
  }) {
    this.id = id;
    this.title = title;
    this.language = language;
    this.publication_date = publication_date;
    this.post_date = post_date;
    this.article_url = article_url;
  }
}
