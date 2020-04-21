import { createClient } from 'contentful';

export const CONTENT_TYPE_POST = 'post';
export const CONTENT_TYPE_PERSON = 'author';
export const CONTENT_TYPE_BANNER = 'banner';

const query = `{
  post {
    items {
      title
    }
  }
}`;
const Space = process.env.CONTENTFUL_SPACE_ID;
const Token = process.env.CONTENTFUL_ACCESS_TOKEN;
export class ContentfulService {
  createClientInstance() {
    return createClient({
      space: Space,
      accessToken: Token
    }); 
  }

  async fetchPostById(sysId) {
    const client = this.createClientInstance();
    return await client.getEntries({
      content_type: CONTENT_TYPE_POST,
      'sys.id': sysId
    });
  }

  async getBannerEntries() {
    try {
      const client = this.createClientInstance();
      const contents = await client.getEntries({
        content_type: CONTENT_TYPE_BANNER
      });
      const entries = contents.items
        .map(({ fields }) => ({
          bannerImage: fields.bannerImage.fields.file.url
        }));

      return { entries };
    } catch (error) {
      // TODO: add error handling
    }
  }
  // async restFetch(){
  //   fetch(`https://graphql.contentful.com/content/v1/spaces/${Space}`,{
  //     method:"POST",
  //     headers : {
  //       "content-type":"application/json",
  //       authorization:`Bearer ${Token}`
  //     },
  //     body: JSON.stringify({
  //       query
  //     })
  //   }).then(res =>res.json())
  //   .then(response=>{
  //     console.log(response)
  //   })
  // }
  async getPostEntries(
    { limit, skip, tag } = {
      limit: 5,
      skip: 0,
      tag: ''
    }
  ) {
    try {
      const client = this.createClientInstance();
      const contents = await client.getEntries({
        // include: 1,
        // limit,
        // skip,
        // 'sys.id': tag,
        content_type: CONTENT_TYPE_POST,
        // order: 'fields.publishDate',
      });
      const entries = contents.items
        .map(({ sys, fields }) => ({
          id: sys.id,
          title: fields.title,
          author: {
            fullName:fields.author.fields.fullName,
            avatar:fields.author.fields.avatar.fields.file.url
          },
          description: fields.description,
          image: fields.image.fields.file.url,
          publishedAt: fields.publishDate
        }));

      const total = contents.total;

      return { entries, total, limit, skip };
    } catch (error) {
      // TODO: add error handling
    }
  }

  async getPostById(postId) {
    try {
      const content = await this.fetchPostById(postId);

      const entry = content.items[0];

      return {
          id: entry.sys.id,
          title: entry.fields.title,
          author: {
            fullName:entry.fields.author.fields.fullName,
            avatar:entry.fields.author.fields.avatar.fields.file.url
          },
          description: entry.fields.description,
          image: entry.fields.image.fields.file.url,
          publishedAt: entry.fields.publishDate
      };
    } catch (error) {
        // TODO: add error handling
    }
  }
}