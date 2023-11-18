import "./App.css";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import { createContext, useEffect, useState } from "react"; //Context API for access to board state from anywhere

export const AppContext = createContext();

function App() {
  /* STATES */
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    isGameOver: false,
    foundCorrectWord: false,
  });

  /* CORRECT WORD */
  const correctWord = "RIGHT";

  // Generating the word set once the game loads
  useEffect(() => {
    generateWordSet().then((words) => setWordSet(words.wordSet));
  }, []);

  /* KEYBOARD FUNCTIONALIY - SELECT */
  const onSelectLetter = (keyVal) => {
    // On every attempt, only 5 letters are allowed to be added
    if (currAttempt.letterPos > 4) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  /* KEYBOARD FUNCTIONALIY - DELETE */
  const onDelete = () => {
    // DELETE can't happen if we're on the column block in a row
    if (currAttempt.letterPos === 0) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  /* KEYBOARD FUNCTIONALIY - ENTER */
  const onEnter = () => {
    // ENTERing a new attempt can only happen once all the 5 letters of the current attempt have been selected
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      // Forming the currWord based on the letters of the current attempt
      currWord += board[currAttempt.attempt][i];
    }

    // Checking word validity based on the word dictionary
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word not found in the dictionary");
    }

    // Won game
    if (currWord === correctWord) {
      setGameOver({ isGameOver: true, foundCorrectWord: true });
      return;
    }

    // Lost game
    if (currAttempt.attempt === 5) {
      setGameOver({ isGameOver: true, foundCorrectWord: false });
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.isGameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
