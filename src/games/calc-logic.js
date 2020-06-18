import runGame from '../index.js';

import { randomMinMax } from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const generateGameData = () => {
  const maxNumber = 100;
  const OPERATORS = {
    plus: { char: '+', fn: (a, b) => a + b },
    minus: { char: '-', fn: (a, b) => a - b },
    times: { char: '*', fn: (a, b) => a * b },
  };
  const numberOfOperators = Object.keys(OPERATORS).length - 1;

  const numberOne = randomMinMax(0, maxNumber);
  const numberTwo = randomMinMax(0, maxNumber);
  const operator =
    OPERATORS[Object.keys(OPERATORS)[randomMinMax(0, numberOfOperators)]];

  const question = `${numberOne} ${operator.char} ${numberTwo}`;

  const answer = operator.fn(numberOne, numberTwo).toString();

  return { question, answer };
};

const runCalcGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runCalcGame;
