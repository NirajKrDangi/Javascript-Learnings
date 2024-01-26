// //==== Function Parameter ====//
// const prompt = require("prompt-sync")({ sigint: true });

// // Creating Function
// function greet(name){
//     console.log(`Hello Mrs ${name} ji , How are You`);
// }

// // Input Function Parameter
// let name = prompt("Enter Your Name: ");

// // Calling Function
// greet(name);


// Function with Default Parameters
var multiply = (a, b) => {
    b = typeof b !== "undefined" ? b:1;
    return a * b;
}

console.log(multiply(12));