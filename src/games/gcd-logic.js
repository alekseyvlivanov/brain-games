import chalk from 'chalk';

import { getUserAnswer, getUserNameAndHello, showWelcome } from '../cli.js';

function getGCD(numberOne, numberTwo) {
  let nMax = Math.max(numberOne, numberTwo);
  let nMin = Math.min(numberOne, numberTwo);
  let remainder = nMax % nMin;

  while (remainder > 0) {
    nMax = nMin;
    nMin = remainder;
    remainder = nMax % nMin;
  }

  return nMin;
}

function makeGCDGame(numberOfTries) {
  const maxNumber = 100;

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

  log('Find the greatest common divisor of given numbers.');

  while (isPlaying) {
    numberOne = Math.floor(Math.random() * maxNumber);
    numberTwo = Math.floor(Math.random() * maxNumber);

    correctAnswer = getGCD(numberOne, numberTwo);

    log(`Question: ${numberOne} ${numberTwo}`);
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

export default makeGCDGame;
