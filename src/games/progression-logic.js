import {
  chalkBold,
  getUserNameAndHello,
  showDescription,
  showWelcome,
  doPlaying,
} from '../index.js';

function makeProgressionGame() {
  const fnWhatToCheck = () => {
    const maxNumber = 10;

    const numberOne = Math.floor(Math.random() * maxNumber);
    const numberTwo = Math.floor(Math.random() * maxNumber * 2);
    const numberThree = Math.floor(Math.random() * maxNumber);

    const fn = (ele, idx) => ele + idx * numberTwo;

    const progression = new Array(maxNumber)
      .fill(numberOne)
      .map((ele, idx) => fn(ele, idx));

    return {
      numberOne,
      numberTwo,
      numberThree,
      progression,
    };
  };

  const fnCorrectAnswer = ({ numberThree, progression }) =>
    progression[numberThree];

  const fnWhatToAsk = ({ numberThree, progression }) => {
    const myProgression = [...progression];
    myProgression[numberThree] = '..';

    return myProgression.join(' ');
  };

  const fnWhatToDoWithAnswer = (answer) => parseInt(answer, 10);

  showWelcome();
  const name = getUserNameAndHello();

  showDescription(`What number is missing ${chalkBold('in')} the progression?`);

  doPlaying(
    name,
    fnWhatToCheck,
    fnCorrectAnswer,
    fnWhatToAsk,
    fnWhatToDoWithAnswer,
  );
}

export default makeProgressionGame;
