import { useState } from "react";
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
  return (
    <>
      <Navbar theme={mode} toggleTheme={toggleTheme} />
      <section className="container mx-auto">
        <News />
      </section>
    </>
  );
}

export default App;
