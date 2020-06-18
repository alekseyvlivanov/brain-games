import runGame from '../index.js';

import { randomMinMax } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateGameData = () => {
  const maxNumber = 10;

  const numberOne = randomMinMax(0, maxNumber);
  const numberTwo = randomMinMax(0, maxNumber * 2);
  const numberThree = randomMinMax(0, maxNumber);

  const fn = (ele, idx) => ele + idx * numberTwo;

  const progression = new Array(maxNumber)
    .fill(numberOne)
    .map((ele, idx) => fn(ele, idx));

  const answer = progression[numberThree].toString();
  progression[numberThree] = '..';

  const question = progression.join(' ');

  return { question, answer };
};

const runProgressionGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runProgressionGame;
