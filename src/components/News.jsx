import React from "react";
import Card from "./Cards";
import HCard from "./HCards";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const News = (props) => {
  const [data, setData] = useState({
    articles: [],
    loading: false,
    page: 1,
    totalResults: 0,
  });
  useEffect(() => {
    const updateNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f4927d936a664ccd84d6f8f4561d1cfb`;
      let data = await fetch(url);
      let parseData = await data.json();
      setData({
        articles: parseData.articles,
        loading: false,
        totalResults: parseData.totalResults,
      });
    };

    updateNews();
  }, []);
  const capitalCasing = (word) => {
    let newWord =
      word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
    return newWord;
  };
  document.title = capitalCasing(props.category);
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4">
        {data.articles.map((element) => (
          <Card
            key={element.url}
            title={element.title}
            image={element.urlToImage}
            desc={element.description}
            link={element.url}
            mode={props.mode}
          />
        ))}
      </div>
    </div>
  );
};

export default News;

News.PropTypes = {
  mode: PropTypes.number,
  category: PropTypes.string,
};
News.defaultProps = {
  mode: 50,
  category: "general",
};
