import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

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

  return (
    <>
      <Navbar theme={mode} toggleTheme={toggleTheme} />
      <section className="container mx-auto">
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" mode={mode} category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News key="business" mode={mode} category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News key="Entertainment" mode={mode} category="entertainment" />
            }
          />
          <Route
            exact
            path="/science"
            element={<News key="science" mode={mode} category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" mode={mode} category="sports" />}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" mode={mode} category="health" />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News key="technology" mode={mode} category="technology" />
            }
          />
        </Routes>
      </section>
    </>
  );
}

export default App;
