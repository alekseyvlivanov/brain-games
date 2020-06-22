import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;

const getGCD = (x, y) => {
  let firstNumber = Math.abs(x);
  let secondNumber = Math.abs(y);
  let tempNumber;

  while (secondNumber) {
    tempNumber = secondNumber;
    secondNumber = x % secondNumber;
    firstNumber = tempNumber;
  }

  return firstNumber;
};

const generateGameData = () => {
  const numberOne = getRandomNumber(1, maxNumber);
  const numberTwo = getRandomNumber(1, maxNumber);

  const question = `${numberOne} ${numberTwo}`;

  const answer = getGCD(numberOne, numberTwo).toString();

  return { question, answer };
};

const runGCDGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runGCDGame;
