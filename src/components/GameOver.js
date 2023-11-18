import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";

function GameOver() {
  // States
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);

  const handleEnter = useCallback((e) => window.location.reload());

  // Listenig for key press events
  useEffect(() => {
    document.addEventListener("keydown", handleEnter);

    // Cleaning up
    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [handleEnter]);

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
