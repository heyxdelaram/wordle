import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(AppContext);

  // Selecting a letter from the keyboard and adding it to the board
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      // ENTERing a new attempt can only happen once all the 5 letters of the current attempt have been selected
      if (currAttempt.letterPos !== 5) return;

      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else if (keyVal === "←") {
      // DELETE can't happen if we're on the column block in a row
      if (currAttempt.letterPos === 0) return;

      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    } else {
      // On every attempt, only 5 letters are allowed to be added
      if (currAttempt.letterPos > 4) return;

      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }
  };

  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
