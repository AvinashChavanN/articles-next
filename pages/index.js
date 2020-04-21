import React from 'react';
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Link from "next/link";
import { ContentfulService } from '../core/contentful';
import axios from "axios";

const query = `{ article }`;
const DUMMY_DATA = [
  {
    title: "A JavaScript library for user interfaces",
    image: "react.jpg",
    content: `Declarative. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render`,
  },
  {
    title: "The React Framework",
    image: "white-nextjs.jpg",
    content: `Production grade React applications that scale. The world's
    leading companies use Next.js to build static and dynamic websites
    and web applications.`,
  },
];
const HomePage = ({images, graphqlData}) => {
  return <Layout title="Home Page" description="Best place to find latest articles">
    <Banner bannerImages = {images}></Banner>
    <div className="p-12">
      <div
        className="h-64 rounded-lg bg-cover mx-auto relative w-full p-4 text-white"
        style={{ backgroundImage: `url("abstract-background.jpg")` }}
      >
        <h1 className="text-white mb-4 font-bold text-xl">Dummy Heading</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="text-sm m-auto">
          <Link href={{ pathname: "articles" }}>
            <button className="btn-primary">
              Read More &rarr;
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-evenly mt-4">
        {DUMMY_DATA.map((content, index) => {
          return (
            <div
              className="relative rounded overflow-hidden shadow-lg p-4 lg:w-1/4 md:w-1/3 sm:w-1/2"
              key={index}
            >
              <img
                className="w-full h-48 object-cover"
                src={content.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{content.title}</div>
                <p className="text-gray-700 text-base truncate">
                  {content.content}
                </p>
              </div>

              <div className="text-sm m-auto mt-12">
                <Link href={{ pathname: "articles" }}>
                  <button className="btn-primary">
                    Read More &rarr;
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Layout>
}

HomePage.getInitialProps = async () => {
  const contentfulService = new ContentfulService();
  const { entries } = await contentfulService.getBannerEntries();
  const response = await axios.post(`http://localhost:3000/api/graphql`, {
    query
  });
return { images: entries, graphqlData:{...response.data.data} }
}

export default HomePage