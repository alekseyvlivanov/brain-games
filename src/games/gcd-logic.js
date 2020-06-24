import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;

const getGCD = (x, y) => Math.abs(y !== 0 ? getGCD(y, x % y) : x);

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
