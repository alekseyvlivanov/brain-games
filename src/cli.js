import readlineSync from 'readline-sync';

function getUserAnswer(question) {
  return readlineSync.question(question).toLowerCase();
}

function getUserName() {
  let name;

  while (!name) {
    name = readlineSync.question('May I have your name? ');
  }

  return name;
}

export { getUserAnswer, getUserName };
