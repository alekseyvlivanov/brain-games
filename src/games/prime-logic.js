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

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

function makePrimeGame() {
  const fnWhatToCheck = () => {
    const maxNumber = 100;

    return Math.floor(Math.random() * maxNumber);
  };

  const fnCorrectAnswer = (whatToCheck) =>
    isPrime(whatToCheck) ? YESNO.yes : YESNO.no;

  showWelcome();
  const name = getUserNameAndHello();

  showDescription(
    `Answer ${quotesRed('yes')} ${chalkBold(
      'if',
    )} given number is prime. Otherwise answer ${quotesRed('no')}${dotBlue}`,
  );

  doPlaying(name, fnWhatToCheck, fnCorrectAnswer);
}

export default makePrimeGame;
