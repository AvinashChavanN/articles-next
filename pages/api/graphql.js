import { graphql, buildSchema } from "graphql";
import { ContentfulService } from '../../core/contentful';

const schema = buildSchema(`
type Author {
    fullName: String,
    avatar: String
}
type Article {
    id: String,
    title: String,         
    author: Author,
    description: String,
    image: String,
    publishedAt: String
}
type Query {
    articles: [Article],
    article(id:String): Article
  }
`);

const root = { 
    articles: async () =>{
        const contentfulService = new ContentfulService();
        const { entries } = await contentfulService.getPostEntries();
        return entries;
    },
    article: async (id) =>{
        const contentfulService = new ContentfulService();
        const entries = await contentfulService.getPostById(id);
        return entries;
    }
};

export default async (req, res) => {
  const query = req.body.query;
  const response = await graphql(schema, query, root);

  return res.end(JSON.stringify(response));
};