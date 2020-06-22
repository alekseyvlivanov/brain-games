import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;

const getGCD = (x, y) => {
  let max = Math.max(Math.abs(x), Math.abs(y));
  let min = Math.min(Math.abs(x), Math.abs(y));

  if (min === 0) return max;

  let remainder = max % min;

  while (remainder) {
    max = min;
    min = remainder;
    remainder = max % min;
  }

  return min;
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
