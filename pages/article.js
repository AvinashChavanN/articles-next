import React from 'react';
import Layout from "../components/Layout";
import Error from 'next/error';
import { inject, observer } from 'mobx-react';

@inject('articleStore') @observer
class Article extends React.Component{

  static async getInitialProps({ mobxStore, query }){
    await mobxStore.articleStore.fetch(query.articleId);
    return { article: mobxStore.articleStore.article };
  }
  
  render(){
    const { article } = this.props;
  return  (<Layout title="Article" description="Best place to find latest articles">
    {article && article.title ?
        <div className="px-24">
        <h1 className="text-center font-bold text-xl uppercase mt-4 mb-4 text-teal-500">
          {article.title}
        </h1>
        <img
          className="w-full h-64 object-cover mb-8"
          src={article.image}
          alt="Sunset in the mountains"
        />
        <div>{article.description}</div>
        <div className="flex items-center py-4">
          <img
            className="w-24 h-24 rounded-full mr-4"
            src={article.author.avatar}
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-lg">
            <p className="text-gray-900 leading-none">
              {article.author.fullName}
            </p>
            <p className="text-gray-600">{article.publishedAt}</p>
          </div>
        </div>
      </div> : 
      <Error/>
      }
  </Layout>
);
}

}

export default Article;
