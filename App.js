import React, { useState } from "react";
import "./Components/Gamestyle.css";

const userWinningPlays = [
  "✂️📰",
  "🧱✂️",
  "📰🧱",
  "🦎📰",
  "🖖✂️",
  "🧱🦎",
  "📰🖖",
  "🖖🧱",
  "✂️🦎",
  "🦎🖖"
];

function computeWinner(userSelection, computerSelection) {
  if (!userSelection || !computerSelection) return null;

  if (userSelection === computerSelection) {
    return "draw";
  }

  if (userWinningPlays.includes(userSelection + computerSelection)) {
    return "user";
  }

  return "computer";
}

const messages = {
  draw: "It's a draw",
  user: "You win",
  computer: "Computer win"
};

export default function App() {
  const [computerSelection, setComputerSelection] = useState(null);
  const [userSelection, setUserSelection] = useState(null);
  const selection = ["🧱", "📰", "✂️", "🦎", "🖖"];

  const clickHandler = (value) => {
    setUserSelection(value);
    randomChoiceGenerator();
  };

  const randomChoiceGenerator = () => {
    const randomSelection =
      selection[Math.floor(Math.random() * selection.length)];
    setComputerSelection(randomSelection);
  };

  const gameResult = computeWinner(userSelection, computerSelection);
  const finalOutput = gameResult ? messages[gameResult] : "";

  return (
    <>
      <h1>Rock Paper Scissors lizard Spock</h1>
      <div>
        <div className="container">
          <div className="section">
            <div className="info">
              <h3>You</h3>
            </div>
            <div className="show">{userSelection}</div>
          </div>

          <div className="section">
            <div className="info">
              <h3>Computer</h3>
            </div>
            <div className="show computer">{computerSelection}</div>
          </div>
        </div>
        <h2>{finalOutput} </h2>

        <div className="attack-btn">
          {selection.map((select, index) => (
            <button key={index} onClick={() => clickHandler(select)}>
              {select}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
