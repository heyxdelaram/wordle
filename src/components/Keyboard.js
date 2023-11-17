import React from "react";
import Key from "./Key";
function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => (
          <Key keyVal={key} />
        ))}
      </div>
      <div className="line2">
        {keys2.map((key) => (
          <Key keyVal={key} />
        ))}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key) => (
          <Key keyVal={key} />
        ))}
        <Key
          keyVal={
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 0 24 24"
              width="30"
              class="game-icon"
              data-testid="icon-backspace"
            >
              <path
                style={{ fill: "white" }}
                fill="var(--color-tone-1)"
                d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
              ></path>
            </svg>
          }
          bigKey
        />
      </div>
    </div>
  );
}

export default Keyboard;
