import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(50);
  const [cardButtonStyle, setCardButtonStyle] = useState(true);
  const [listButtonStyle, setListButtonStyle] = useState(false);
  const toggleTheme = () => {
    if (mode === 50) {
      setMode(950);
      document.body.style.backgroundColor = "#0f172a";
    } else {
      setMode(50);
      document.body.style.backgroundColor = "#e2e8f0";
    }
  };
  const toggleCardStyle = () => {
    if (!cardButtonStyle) {
      setListButtonStyle(false);
      setCardButtonStyle(true);
    }
  };
  const toggleListStyle = () => {
    if (!listButtonStyle) {
      setCardButtonStyle(false);
      setListButtonStyle(true);
    }
  };

  return (
    <>
      <Navbar
        mode={mode}
        toggleTheme={toggleTheme}
        toggleCardStyle={toggleCardStyle}
        toggleListStyle={toggleListStyle}
      />
      <section className="container mx-auto">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                mode={mode}
                category="general"
                cardButtonStyle={cardButtonStyle}
                listButtonStyle={listButtonStyle}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                mode={mode}
                category="business"
                cardButtonStyle={cardButtonStyle}
                listButtonStyle={listButtonStyle}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="Entertainment"
                mode={mode}
                category="entertainment"
                cardButtonStyle={cardButtonStyle}
                listButtonStyle={listButtonStyle}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                mode={mode}
                category="science"
                cardButtonStyle={cardButtonStyle}
                listButtonStyle={listButtonStyle}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                mode={mode}
                category="sports"
                cardButtonStyle={cardButtonStyle}
                listButtonStyle={listButtonStyle}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                mode={mode}
                category="health"
                cardButtonStyle={cardButtonStyle}
                listButtonStyle={listButtonStyle}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                mode={mode}
                category="technology"
                cardButtonStyle={cardButtonStyle}
                listButtonStyle={listButtonStyle}
              />
            }
          />
        </Routes>
      </section>
    </>
  );
}

export default App;
