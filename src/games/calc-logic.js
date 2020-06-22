import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const maxNumber = 100;

const gameOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(gameOperations);

const generateGameData = () => {
  const numberOne = getRandomNumber(1, maxNumber);
  const numberTwo = getRandomNumber(1, maxNumber);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${numberOne} ${operator} ${numberTwo}`;

  const answer = gameOperations[operator](numberOne, numberTwo).toString();

  return { question, answer };
};

const runCalcGame = () => {
  runGame(gameDescription, generateGameData);
};

export default runCalcGame;
