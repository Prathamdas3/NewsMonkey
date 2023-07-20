import React from "react";
import Card from "./Cards";
import HCard from "./HCards";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../component/Spinner";

const News = (props) => {
  const [data, setData] = useState({
    articles: [],

    page: 1,
    totalResults: 0,
  });
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    const updateNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f4927d936a664ccd84d6f8f4561d1cfb`;
      setSpinner(true);
      let data = await fetch(url);
      let parseData = await data.json();
      setData({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
      });
      setSpinner(false);
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
      {spinner && <Spinner mode={props.mode} />}
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
