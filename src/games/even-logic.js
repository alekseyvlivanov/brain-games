import {
  chalkBold,
  quotesRed,
  dotBlue,
  YESNO,
  getUserNameAndHello,
  showDescription,
  showWelcome,
  doPlaying,
} from '../index.js';

function makeEvenGame() {
  const fnWhatToCheck = () => {
    const maxNumber = 100;

    return Math.floor(Math.random() * maxNumber);
  };

  const fnCorrectAnswer = (whatToCheck) =>
    whatToCheck % 2 === 0 ? YESNO.yes : YESNO.no;

  showWelcome();
  const name = getUserNameAndHello();

  showDescription(
    `Answer ${quotesRed('yes')} ${chalkBold(
      'if',
    )} the number is even, otherwise answer ${quotesRed('no')}${dotBlue}`,
  );

  doPlaying(name, fnWhatToCheck, fnCorrectAnswer);
}

export default makeEvenGame;
