import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const numberOfTerms = 10;

const generateArithmeticProgression = (number, first, difference) => {
  return new Array(number)
    .fill(first)
    .map((element, idx) => element + idx * difference);
};

const generateGameData = () => {
  const firstTerm = getRandomNumber(1, 20);
  const differenceBetweenTerms = getRandomNumber(1, 30);
  const hiddenTerm = getRandomNumber(0, numberOfTerms - 1);

  const progression = generateArithmeticProgression(
    numberOfTerms,
    firstTerm,
    differenceBetweenTerms,
  );

  const answer = progression[hiddenTerm].toString();
  progression[hiddenTerm] = '..';

  const question = progression.join(' ');

  return { question, answer };
};

const runProgressionGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runProgressionGame;
