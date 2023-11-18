import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  // States
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);

  return (
    <div className="game-ver">
      <h3>{gameOver.foundCorrectWord ? "You Won!" : "You Lost!"}</h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.foundCorrectWord && (
        <h3> You had {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
