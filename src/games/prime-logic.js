import runGame from '../index.js';

import { randomMinMax } from '../utils.js';

const gameDescription =
  'Answer "yes" if the given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generateGameData = () => {
  const question = randomMinMax(0, 100);

  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const runPrimeGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runPrimeGame;
