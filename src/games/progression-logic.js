import doPlaying from '../index.js';

import { chalkBold, randomFromTo } from '../utils.js';

const gameDescription = `What number is missing ${chalkBold(
  'in',
)} the progression?`;

const runProgressionGame = () => {
  const generateGameData = () => {
    const maxNumber = 10;

    const numberOne = randomFromTo(0, maxNumber);
    const numberTwo = randomFromTo(0, maxNumber * 2);
    const numberThree = randomFromTo(0, maxNumber);

    const fn = (ele, idx) => ele + idx * numberTwo;

    const progression = new Array(maxNumber)
      .fill(numberOne)
      .map((ele, idx) => fn(ele, idx));

    const gameAnswer = progression[numberThree];
    progression[numberThree] = '..';

    const gameQuestion = progression.join(' ');

    const handleAnswer = (answer) => parseInt(answer, 10);

    return { gameQuestion, gameAnswer, handleAnswer };
  };

  doPlaying(gameDescription, generateGameData);
};

export default runProgressionGame;
