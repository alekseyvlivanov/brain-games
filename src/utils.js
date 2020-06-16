import chalk from 'chalk';

const YESNO = {
  yes: 'yes',
  no: 'no',
};

const dotBlue = chalk.blue('.');

const chalkBold = (text) => chalk.bold(text);
const quotesRed = (text) => chalk.red(`"${text}"`);

const randomFromTo = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

export { YESNO, dotBlue, chalkBold, quotesRed, randomFromTo };
