import chalk from 'chalk';

import { getUserAnswer, getUserNameAndHello, showWelcome } from '../cli.js';

function makeEvenGame(numberOfTries) {
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
    'Answer',
    chalk.red('"yes"'),
    chalk.bold('if'),
    'the number is even, otherwise answer',
    `${quotesRed('no')}${dotBlue}`,
  );

  while (isPlaying) {
    numberToCheck = Math.floor(Math.random() * maxNumber);
    correctAnswer = numberToCheck % 2 === 0 ? ANSWERS.yes : ANSWERS.no;

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

export default makeEvenGame;
