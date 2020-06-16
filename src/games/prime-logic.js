import doPlaying from '../index.js';

import {
  YESNO,
  dotBlue,
  chalkBold,
  quotesRed,
  randomFromTo,
} from '../utils.js';

const gameDescription = `Answer ${quotesRed('yes')} ${chalkBold(
  'if',
)} given number is prime. Otherwise answer ${quotesRed('no')}${dotBlue}`;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const runPrimeGame = () => {
  const generateGameData = () => {
    const maxNumber = 100;

    const gameQuestion = randomFromTo(0, maxNumber);

    const gameAnswer = isPrime(gameQuestion) ? YESNO.yes : YESNO.no;

    return { gameQuestion, gameAnswer };
  };

  doPlaying(gameDescription, generateGameData);
};

export default runPrimeGame;
