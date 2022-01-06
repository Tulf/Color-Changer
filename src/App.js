import logo from './logo.svg';
import './App.css';
import "./index.css";
import { useState } from "react";

export default function App() {
  const originalColors = ["#ff0000", "#0000ff", "	#00ff00", "#ffff00"];
  const [colors, setColors] = useState(originalColors);
  const changeColor = (i) => {
    const getRandomColor = () =>
      `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    let randomColor = getRandomColor();
    while (randomColor === originalColors[i]) {
      randomColor = getRandomColor();
    }
    let newColors = [...colors];
    newColors[i] =
      newColors[i] === originalColors[i] ? randomColor : originalColors[i];
    setColors(newColors);
  };
  return (
    <div>
      {colors.map((a, i) => (
        <div
          key={a}
          style={{ backgroundColor: a, height: "100px", width: "100px" }}
          id={a}
          onClick={() => changeColor(i)}
        ></div>
      ))}
    </div>
  );
}

/*
click color
triggers different div change color
fire timer to clicking the other div
  [recentlyClicked, setRecentlyClicked] = useState()
  [recentlyBlackened , setRecentlyBlackened] = useState()
  const timeout, if exceeded set game over to true
  clear timeout
  [game, setGameOver] if true return gameover
  Useeffect(to check recnetly clicked vs blackened)
  clears timeout
  
  if game over have a conditonal return
*/
