import { observable, action } from 'mobx';

import { ContentfulService } from "../core/contentful";

class ArticleStore {
  @observable article = null;
  @observable articles = null;

  constructor(initialData = {}) {
    this.article = initialData.article;
  }

  async fetch(id) {
    const contentfulService = new ContentfulService();
    const entry = await contentfulService.getPostById(id);
    this.setArticle(entry);
 }
 async fetchAllArticles() {
    const contentfulService = new ContentfulService();
    const {entries} = await contentfulService.getPostEntries();
    this.setArticles(entries);
 }

  @action setArticle(article) {
    this.article = article;
  }
  @action setArticles(entries) {
    this.articles = entries;
  }
}

export default ArticleStore;