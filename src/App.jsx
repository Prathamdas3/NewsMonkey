import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [mode, setMode] = useState(50);
  const toggleTheme = () => {
    if (mode === 50) {
      setMode(950);
      document.body.style.backgroundColor = "#0f172a";
    } else {
      setMode(50);
      document.body.style.backgroundColor = "#e2e8f0";
    }
  };
  const [data, setData] = useState({
    articles: [],
    loading: false,
    page: 1,
    totalResults: 0,
  });
  useEffect(() => {
    const updateNews = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f4927d936a664ccd84d6f8f4561d1cfb";
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
  return (
    <>
      <Navbar theme={mode} toggleTheme={toggleTheme} />
      <section className="container mx-auto">
        <News news={data.articles} />
      </section>
    </>
  );
}

export default App;
