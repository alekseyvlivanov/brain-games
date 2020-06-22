import chalk from 'chalk';

const makeRed = (text) => chalk.red(text);

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { makeRed, getRandomNumber };
