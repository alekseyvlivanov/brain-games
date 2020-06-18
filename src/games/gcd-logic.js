import runGame from '../index.js';

import { randomMinMax } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (numberOne, numberTwo) => {
  let nMax = Math.max(numberOne, numberTwo);
  let nMin = Math.min(numberOne, numberTwo);
  let remainder = nMax % nMin;

  while (remainder > 0) {
    nMax = nMin;
    nMin = remainder;
    remainder = nMax % nMin;
  }

  return nMin;
};

const generateGameData = () => {
  const maxNumber = 100;

  const numberOne = randomMinMax(0, maxNumber);
  const numberTwo = randomMinMax(0, maxNumber);

  const question = `${numberOne} ${numberTwo}`;

  const answer = getGCD(numberOne, numberTwo).toString();

  return { question, answer };
};

const runGCDGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runGCDGame;
