const readline = require('readline');
const calculos = require('./calculos')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a promise based version of rl.question so we can use it in async functions
const question = (str) => new Promise(resolve => rl.question(str, resolve));

// A list of all the steps involved in our program
const main = {
  start: async () => {
    const number1 = parseInt(await question("number1 = "));
    const number2 = parseInt(await question("number2 = "));

    const sum = calculos.sum(number1, number2)
    const minus = calculos.minus(number1, number2)
    const mult = calculos.mult(number1, number2)
    const div = calculos.div(number1, number2)

    console.log(`${number1} + ${number2} = ${sum}`)
    console.log(`${number1} - ${number2} = ${minus}`)
    console.log(`${number1} * ${number2} = ${mult}`)
    console.log(`${number1} / ${number2} = ${div}`)
    
    return main.end();
  },
  end: async () => {
    rl.close();
  },
};

// Start the program by running the first step.
main.start();