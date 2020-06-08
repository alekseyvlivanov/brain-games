import chalk from 'chalk';

import { getUserAnswer, getUserNameAndHello, showWelcome } from '../cli.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

function makePrimeGame(numberOfTries) {
  const ANSWERS = {
    yes: 'yes',
    no: 'no',
  };
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
  let numberToCheck;

  log(
    `Answer ${quotesRed('yes')} ${chalk.bold(
      'if',
    )} given number is prime. Otherwise answer ${quotesRed('no')}${dotBlue}`,
  );

  while (isPlaying) {
    numberToCheck = Math.floor(Math.random() * maxNumber);
    correctAnswer = isPrime(numberToCheck) ? ANSWERS.yes : ANSWERS.no;

    log(`Question: ${numberToCheck}`);
    answer = getUserAnswer(`Your answer: `);

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

export default makePrimeGame;
