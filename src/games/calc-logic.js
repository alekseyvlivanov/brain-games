import {
  getUserNameAndHello,
  showDescription,
  showWelcome,
  doPlaying,
} from '../index.js';

function makeEvenGame() {
  const fnWhatToCheck = () => {
    const maxNumber = 100;
    const OPERATORS = {
      plus: { char: '+', fn: (a, b) => a + b },
      minus: { char: '-', fn: (a, b) => a - b },
      times: { char: '*', fn: (a, b) => a * b },
    };
    const numberOfOperators = Object.keys(OPERATORS).length;

    return {
      numberOne: Math.floor(Math.random() * maxNumber),
      numberTwo: Math.floor(Math.random() * maxNumber),
      operator:
        OPERATORS[
          Object.keys(OPERATORS)[Math.floor(Math.random() * numberOfOperators)]
        ],
    };
  };

  const fnCorrectAnswer = ({ numberOne, numberTwo, operator }) =>
    operator.fn(numberOne, numberTwo);

  const fnWhatToAsk = ({ numberOne, numberTwo, operator }) =>
    `${numberOne} ${operator.char} ${numberTwo}`;

  const fnWhatToDoWithAnswer = (answer) => parseInt(answer, 10);

  showWelcome();
  const name = getUserNameAndHello();

  showDescription('What is the result of the expression?');

  doPlaying(
    name,
    fnWhatToCheck,
    fnCorrectAnswer,
    fnWhatToAsk,
    fnWhatToDoWithAnswer,
  );
}

export default makeEvenGame;
