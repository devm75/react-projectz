import React, {useState } from "react";
import "./App.css";
import Tetris from "./components/Tetris";
import Reset from "./components/Reset";

const ROWS = 12;
const COLS = 10;

const App = () => {
  const [resetCounter, setResetCounter] = useState(0);
  const incrementCounter = () => {
    setResetCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <Tetris key={`tetris-${resetCounter}`} rows={ROWS} cols={COLS} />
      <Reset onResetClicked={incrementCounter} />
    </div>
  );
};

export default App;
