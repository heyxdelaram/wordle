import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  // States
  const { board, correctWord, currAttempt, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  // Check if letter is in the CORRECT POSITION
  const correct = correctWord[letterPos] === letter;

  // Check if the letter exists in the key word
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  // Defining the state of the letter
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost)
      setDisabledLetters((prev) => [...prev, letter]);
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
