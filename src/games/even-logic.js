import runGame from '../index.js';

import { randomMinMax } from '../utils.js';

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameData = () => {
  const question = randomMinMax(0, 100);

  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

const runEvenGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runEvenGame;
