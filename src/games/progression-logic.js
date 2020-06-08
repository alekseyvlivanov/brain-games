import chalk from 'chalk';

import { getUserAnswer, getUserNameAndHello, showWelcome } from '../cli.js';

function makeProgressionGame(numberOfTries) {
  const maxNumber = 10;

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
  let numberThree;

  log(`What number is missing ${chalk.bold('in')} the progression?`);

  const fn = (ele, idx) => ele + idx * numberTwo;

  while (isPlaying) {
    numberOne = Math.floor(Math.random() * maxNumber);
    numberTwo = Math.floor(Math.random() * maxNumber * 2);
    numberThree = Math.floor(Math.random() * maxNumber);

    const progression = new Array(maxNumber)
      .fill(numberOne)
      .map((ele, idx) => fn(ele, idx));

    correctAnswer = progression[numberThree];
    progression[numberThree] = '..';

    log(`Question: ${progression.join(' ')}`);
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

export default makeProgressionGame;
