import React, { useCallback, useContext, useEffect } from "react";
import Key from "./Key";
import { AppContext } from "../App";


function Keyboard() {
  //States
  const { onEnter, onDelete, onSelectLetter, disabledLetters } =
    useContext(AppContext);

  //Keyboard keys represented as 3 rows of characters
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // Handling typed keys on device keyboard
  const handleKeyboardDevice = useCallback((e) => {
    if (e.key === "Enter") onEnter();
    else if (e.key === "Backspace") onDelete();
    else {
      // Checking which key from the 3 arrays was pressed
      keys1.forEach((key) => {
        if (e.key.toUpperCase() === key) onSelectLetter(key);
      });
      keys2.forEach((key) => {
        if (e.key.toUpperCase() === key) onSelectLetter(key);
      });
      keys3.forEach((key) => {
        if (e.key.toUpperCase() === key) onSelectLetter(key);
      });
    }
  });

  // Listenig for key press events
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardDevice);

    // Cleaning up
    return () => {
      document.removeEventListener("keydown", handleKeyboardDevice);
    };
  }, [handleKeyboardDevice]);

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => (
          <Key
            key={key}
            keyVal={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>
      <div className="line2">
        {keys2.map((key) => (
          <Key
            key={key}
            keyVal={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key) => (
          <Key
            key={key}
            keyVal={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
        <Key keyVal={"←"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
