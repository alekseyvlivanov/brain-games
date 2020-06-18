import readlineSync from 'readline-sync';

import { makeRed } from './utils.js';

const numberOfAttempts = 3;

const getUserName = () => {
  let name;

  while (!name) {
    name = readlineSync.question('May I have your name? ');
  }

  return name;
};

const runGame = (gameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');

  const name = getUserName();
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  for (let attempt = 1; attempt <= numberOfAttempts; attempt += 1) {
    const { question, answer } = generateGameData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== answer) {
      console.log(
        `${makeRed(
          userAnswer,
        )} is wrong answer ;(. Correct answer was ${makeRed(answer)}.`,
      );
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
