import doPlaying from '../index.js';

import { randomFromTo } from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const runCalcGame = () => {
  const generateGameData = () => {
    const maxNumber = 100;
    const OPERATORS = {
      plus: { char: '+', fn: (a, b) => a + b },
      minus: { char: '-', fn: (a, b) => a - b },
      times: { char: '*', fn: (a, b) => a * b },
    };
    const numberOfOperators = Object.keys(OPERATORS).length - 1;

    const numberOne = randomFromTo(0, maxNumber);
    const numberTwo = randomFromTo(0, maxNumber);
    const operator =
      OPERATORS[Object.keys(OPERATORS)[randomFromTo(0, numberOfOperators)]];

    const gameQuestion = `${numberOne} ${operator.char} ${numberTwo}`;

    const gameAnswer = operator.fn(numberOne, numberTwo);

    const handleAnswer = (answer) => parseInt(answer, 10);

    return { gameQuestion, gameAnswer, handleAnswer };
  };

  doPlaying(gameDescription, generateGameData);
};

export default runCalcGame;
