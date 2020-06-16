import doPlaying from '../index.js';

import {
  YESNO,
  dotBlue,
  chalkBold,
  quotesRed,
  randomFromTo,
} from '../utils.js';

const gameDescription = `Answer ${quotesRed('yes')} ${chalkBold(
  'if',
)} the number is even, otherwise answer ${quotesRed('no')}${dotBlue}`;

const runEvenGame = () => {
  const generateGameData = () => {
    const maxNumber = 100;

    const gameQuestion = randomFromTo(0, maxNumber);

    const gameAnswer = gameQuestion % 2 === 0 ? YESNO.yes : YESNO.no;

    return { gameQuestion, gameAnswer };
  };

  doPlaying(gameDescription, generateGameData);
};

export default runEvenGame;
