import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  // Selecting a letter from the keyboard and adding it to the board
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter(keyVal);
    } else if (keyVal === "←") {
      onDelete(keyVal);
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
