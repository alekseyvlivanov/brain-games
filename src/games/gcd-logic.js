import {
  getUserNameAndHello,
  showDescription,
  showWelcome,
  doPlaying,
} from '../index.js';

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

function makeGCDGame() {
  const fnWhatToCheck = () => {
    const maxNumber = 100;

    return {
      numberOne: Math.floor(Math.random() * maxNumber),
      numberTwo: Math.floor(Math.random() * maxNumber),
    };
  };

  const fnCorrectAnswer = ({ numberOne, numberTwo }) =>
    getGCD(numberOne, numberTwo);

  const fnWhatToAsk = ({ numberOne, numberTwo }) => `${numberOne} ${numberTwo}`;

  const fnWhatToDoWithAnswer = (answer) => parseInt(answer, 10);

  showWelcome();
  const name = getUserNameAndHello();

  showDescription('Find the greatest common divisor of given numbers.');

  doPlaying(
    name,
    fnWhatToCheck,
    fnCorrectAnswer,
    fnWhatToAsk,
    fnWhatToDoWithAnswer,
  );
}

export default makeGCDGame;
