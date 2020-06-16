import readlineSync from 'readline-sync';

import { dotBlue, chalkBold, quotesRed } from './utils.js';

const getUserName = () => {
  let name;

  while (!name) {
    name = readlineSync.question('May I have your name? ');
  }

  return name;
};

const doPlaying = (gameDescription, generateGameData) => {
  const numberOfAttempts = 3;

  console.log('Welcome to the Brain Games!');

  const name = getUserName();
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  for (let attempt = 1; attempt <= numberOfAttempts; attempt += 1) {
    const {
      gameQuestion,
      gameAnswer,
      handleAnswer = null,
    } = generateGameData();

    console.log(`Question: ${gameQuestion}`);

    let answer = readlineSync.question(`Your answer: `).toLowerCase();

    if (handleAnswer) {
      answer = handleAnswer(answer);
    }

    if (answer !== gameAnswer) {
      console.log(
        `${quotesRed(answer)} is wrong answer ${chalkBold(
          ';(',
        )}${dotBlue} Correct answer was ${quotesRed(gameAnswer)}${dotBlue}`,
      );
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default doPlaying;
