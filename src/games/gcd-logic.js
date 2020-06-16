import doPlaying from '../index.js';

import { randomFromTo } from '../utils.js';

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

const runGCDGame = () => {
  const generateGameData = () => {
    const maxNumber = 100;

    const numberOne = randomFromTo(0, maxNumber);
    const numberTwo = randomFromTo(0, maxNumber);

    const gameQuestion = `${numberOne} ${numberTwo}`;

    const gameAnswer = getGCD(numberOne, numberTwo);

    const handleAnswer = (answer) => parseInt(answer, 10);

    return { gameQuestion, gameAnswer, handleAnswer };
  };

  doPlaying(gameDescription, generateGameData);
};

export default runGCDGame;
