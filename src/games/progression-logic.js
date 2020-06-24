import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const numberOfTerms = 10;

const generateArithmeticProgression = (
  numberOfElements,
  firstElement,
  differenceBetweenElements,
) => {
  return new Array(numberOfElements)
    .fill(firstElement)
    .map((element, idx) => element + idx * differenceBetweenElements);
};

const generateGameData = () => {
  const firstTerm = getRandomNumber(1, 20);
  const differenceBetweenTerms = getRandomNumber(1, 30);
  const indexOfHiddenTerm = getRandomNumber(0, numberOfTerms - 1);

  const progression = generateArithmeticProgression(
    numberOfTerms,
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
