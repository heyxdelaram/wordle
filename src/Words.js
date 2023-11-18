import wordBank from "./wordle-bank.txt";

// Every word can be represented as an array of characters
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

/* GENERATING WORD DICTIONARY for VALIDITY CHECK */
export const generateWordSet = async () => {
  // Array.includes() is not efficient in terms of time and memory complexity
  // Instead, Sets have a one time lookup, therefore we will read the txt file and transform it into a Set
  let wordSet;
  await fetch(wordBank)
    .then((res) => res.text())
    .then((result) => {
      const wordBankArray = result.split("\n");
      wordSet = new Set(wordBankArray);
    });
  return { wordSet };
};
