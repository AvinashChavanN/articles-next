import Proptypes from 'prop-types';
import Link from "next/link";
import React from 'react';
function Article({ title, content, author, image, publishedAt, id }) {
  return (
    <div className="relative rounded overflow-hidden shadow-lg p-4 lg:w-1/4 md:w-1/3 sm:w-1/2">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base truncate">{content}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center px-6 py-4">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={author.avatar}
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{author.fullName}</p>
            <p className="text-gray-600">{publishedAt}</p>
          </div>
        </div>
        <div className="text-sm m-auto mt-4">
          <Link href={{ pathname: "article", query: { articleId: id }}}>
            <button className="btn-primary">
              Read More &rarr;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
Article.propTypes = {
  title : Proptypes.string,
  content: Proptypes.string,
  image: Proptypes.string, 
  publishedAt: Proptypes.string, 
  id: Proptypes.string
}
export default Article;
