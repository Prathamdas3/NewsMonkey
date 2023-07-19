import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState(950);
  const toggleTheme = () => {
    if (mode === 950) {
      setMode(50);
      document.body.style.backgroundColor = "#e2e8f0";
    } else {
      setMode(950);
      document.body.style.backgroundColor = "#0f172a";
    }
  };
  return (
    <>
      <Navbar theme={mode} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
