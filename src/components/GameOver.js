import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  // States
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);

  return (
    <div className="game-over">
      <h3>{gameOver.foundCorrectWord ? "You Won! 🏅" : "You Lost! ☹️"}</h3>
      {gameOver.foundCorrectWord && (
        <h3>
          with {currAttempt.attempt} attempt{currAttempt.attempt > 1 && "s"}
        </h3>
      )}
      <h4 style={{ color: "#538d4e" }}>Key Word: {correctWord}</h4>

      <button className="play-again" onClick={(e) => window.location.reload()}>
        Play Again
      </button>
    </div>
  );
}

export default GameOver;
