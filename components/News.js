import React, { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const API_KEY = "f405ae14439746ea93315f1db80835d0";
    const API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

    axios
      .get(API_URL)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {news.map((article) => (
        <div
          key={article.title}
          className="m-4 max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{article.title}</div>
            <p className="text-gray-700 text-base">{article.description}</p>
          </div>
          <div className="px-6 py-4">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
