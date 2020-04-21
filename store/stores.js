import { useStaticRendering } from 'mobx-react';

import ArticleStore from './ArticleStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { postStore: {} }) {
  if (isServer) {
    return {
      articleStore: new ArticleStore(initialData.articleStore),
    };
  }
  if (store === null) {
    store = {
      articleStore: new ArticleStore(initialData.articleStore),
    };
  }

  return store;
}