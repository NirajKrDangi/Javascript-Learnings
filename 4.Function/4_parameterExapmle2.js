// Q2. Program to add two number

// for user input  
const prompt = require("prompt-sync")({ sigint: true });

// function declaring
function add(a, b){
    return a + b;
}

// take user input
let number1 = parseInt(prompt("Enter first number: "));
let number2 = parseInt(prompt("Enter second number: "));

// function calling
let result = add(number1, number2);

// display the result
console.log(`The Sum of a and b = ${result}`);

