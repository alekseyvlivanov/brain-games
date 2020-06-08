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

function getUserNameAndHello() {
  const name = getUserName();
  console.log(`Hello, ${name}!`);

  return name;
}

function showWelcome() {
  console.log('Welcome to the Brain Games!');
}

export { getUserAnswer, getUserName, getUserNameAndHello, showWelcome };
