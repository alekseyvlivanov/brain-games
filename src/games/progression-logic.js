import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const generateArithmeticProgression = (length, first, difference) => {
  return new Array(length)
    .fill(first)
    .map((element, idx) => element + idx * difference);
};

const generateGameData = () => {
  const firstTerm = getRandomNumber(1, 20);
  const differenceBetweenTerms = getRandomNumber(1, 30);
  const indexOfHiddenTerm = getRandomNumber(0, lengthOfProgression - 1);

  const progression = generateArithmeticProgression(
    lengthOfProgression,
    firstTerm,
    differenceBetweenTerms,
  );

  const answer = progression[indexOfHiddenTerm].toString();
  progression[indexOfHiddenTerm] = '..';

  const question = progression.join(' ');

  return { question, answer };
};

const runProgressionGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runProgressionGame;
