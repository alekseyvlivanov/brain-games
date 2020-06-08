import { getUserNameAndHello, showWelcome } from '../cli.js';

function makeWelcome() {
  showWelcome();
  getUserNameAndHello();
}

export default makeWelcome;
