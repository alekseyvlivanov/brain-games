import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameData = () => {
  const question = getRandomNumber(1, 100).toString();

  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

const runEvenGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runEvenGame;
