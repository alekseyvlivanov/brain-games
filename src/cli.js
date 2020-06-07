import readlineSync from "readline-sync";

function getUserName() {
  const name = readlineSync.question("May I have your name? ");

  if (name) {
    console.log(`Hello, ${name}!`);
  }
}

export { getUserName };
