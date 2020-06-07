import chalk from 'chalk';

import { getUserAnswer, getUserName } from './cli.js';

function evenLogic() {
  const ANSWERS = {
    yes: 'yes',
    no: 'no',
  };

  const { log } = console;
  const numberOfTries = 3;

  const dotBlue = chalk.blue('.');
  const quotesRed = (text) => chalk.red(`"${text}"`);

  const name = getUserName();

  let answer;
  let correctAnswer;
  let isPlaying = true;
  let numberOfCorrectAnswers = 0;
  let numberToCheck;

  log(`Hello, ${name}!`);
  log(
    'Answer',
    chalk.red('"yes"'),
    chalk.bold('if'),
    'the number is even, otherwise answer',
    `${quotesRed('no')}${dotBlue}`,
  );

  while (isPlaying) {
    numberToCheck = Math.floor(Math.random() * 100);
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

export default evenLogic;
