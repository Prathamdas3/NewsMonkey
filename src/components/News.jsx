import React from "react";
import Card from "./Cards";
import HCard from "./HCards";

const News = (props) => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4">
        {props.news.map((element) => (
          <Card
            key={element.url}
            title={element.title}
            image={element.urlToImage}
            desc={element.description}
            link={element.url}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
