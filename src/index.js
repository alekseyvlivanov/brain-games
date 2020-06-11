import chalk from 'chalk';
import readlineSync from 'readline-sync';

const { log } = console;
const chalkBold = (text) => chalk.bold(text);
const quotesRed = (text) => chalk.red(`"${text}"`);

const dotBlue = chalk.blue('.');
const numberOfTries = 3;
const YESNO = {
  yes: 'yes',
  no: 'no',
};

function getUserAnswer(question) {
  return readlineSync.question(question).toLowerCase();
}

function askQuestionAndGetuserAnswer(question) {
  log(`Question: ${question}`);
  return getUserAnswer(`Your answer: `);
}

function getUserName() {
  let name;

  while (!name) {
    name = readlineSync.question('May I have your name? ');
  }

  return name;
}

function getUserNameAndHello() {
  const name = getUserName();
  log(`Hello, ${name}!`);

  return name;
}

function showDescription(description) {
  log(description);
}

function showWelcome() {
  log('Welcome to the Brain Games!');
}

function doPlaying(
  name,
  fnWhatToCheck,
  fnCorrectAnswer,
  fnWhatToAsk = null,
  fnWhatToDoWithAnswer = null,
) {
  let isPlaying = true;
  let numberOfCorrectAnswers = 0;

  while (isPlaying) {
    const whatToCheck = fnWhatToCheck();
    const correctAnswer = fnCorrectAnswer(whatToCheck);

    const whatToAsk = fnWhatToAsk ? fnWhatToAsk(whatToCheck) : whatToCheck;

    let answer = askQuestionAndGetuserAnswer(whatToAsk);
    if (fnWhatToDoWithAnswer) {
      answer = fnWhatToDoWithAnswer(answer);
    }

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

      if (!isPlaying) {
        log(`Congratulations, ${name}!`);
      }
    }
  }
}

export {
  chalkBold,
  quotesRed,
  dotBlue,
  YESNO,
  getUserAnswer,
  askQuestionAndGetuserAnswer,
  getUserNameAndHello,
  showDescription,
  showWelcome,
  doPlaying,
};
