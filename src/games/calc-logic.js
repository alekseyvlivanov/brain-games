import chalk from 'chalk';

import { getUserAnswer, getUserNameAndHello, showWelcome } from '../cli.js';

function makeEvenGame(numberOfTries) {
  const maxNumber = 100;
  const OPERATORS = {
    plus: { char: '+', fn: (a, b) => a + b },
    minus: { char: '-', fn: (a, b) => a - b },
    times: { char: '*', fn: (a, b) => a * b },
  };
  const numberOfOperators = Object.keys(OPERATORS).length;

  const { log } = console;

  const dotBlue = chalk.blue('.');
  const quotesRed = (text) => chalk.red(`"${text}"`);

  showWelcome();
  const name = getUserNameAndHello();

  let answer;
  let correctAnswer;
  let isPlaying = true;
  let numberOfCorrectAnswers = 0;
  let numberOne;
  let numberTwo;
  let operator;

  log('What is the result of the expression?');

  while (isPlaying) {
    numberOne = Math.floor(Math.random() * maxNumber);
    numberTwo = Math.floor(Math.random() * maxNumber);
    operator =
      OPERATORS[
        Object.keys(OPERATORS)[Math.floor(Math.random() * numberOfOperators)]
      ];

    correctAnswer = operator.fn(numberOne, numberTwo);

    log(`Question: ${numberOne} ${operator.char} ${numberTwo}`);
    answer = parseInt(getUserAnswer(`Your answer: `), 10);

    if (answer !== correctAnswer) {
      log(
        `${quotesRed(answer)} is wrong answer ${chalk.bold(
          ';(',
        )}${dotBlue} Correct answer was ${quotesRed(correctAnswer)}${dotBlue}`,
      );
      log(`Let's try again, ${name}!`);
      isPlaying = false;
    } else {
      log('Correct!');
      numberOfCorrectAnswers += 1;
      isPlaying = numberOfCorrectAnswers < numberOfTries;
    }
  }

  if (numberOfCorrectAnswers >= numberOfTries) {
    log(`Congratulations, ${name}!`);
  }
}

export default makeEvenGame;
