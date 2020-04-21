import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';
import { inject, observer } from 'mobx-react';
import Error from 'next/error'
import axios from "axios";

const query = `{ articles{
  id,   
  title,       
  author{
    fullName,
    avatar
  },
  description,
  image,
  publishedAt
} }`;

const Articles = inject('articleStore')(observer(( { articles } ) => (
  <Layout title="Article Page" description="Best place to find latest articles">
  <div className="flex mt-24 flex-wrap px-8 justify-evenly">
    {articles && articles.length > 0
    ? articles.map(article => (
        <Article
          title={article.title}
          content={article.description}
          author={article.author}
          image={article.image}
          publishedAt={article.publishedAt}
          key={article.id}
          id={article.id}
        />
      ))
    : <Error/>}
    </div>
</Layout>
)));

Articles.getInitialProps = async ({ mobxStore }) => {
  // await mobxStore.articleStore.fetchAllArticles();
  const response = await axios.post(`http://localhost:3000/api/graphql`, {
    query
  });
  return {...response.data.data}
}

export default Articles;