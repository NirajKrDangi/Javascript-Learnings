//==== Ternary Operator ====/

// let marks = 32;
// let result = (marks >= 33) ? "Pass" : "Fail";
// console.log(result);

//==== Ternary Operator ====/
// program to check if number is positive, negative or zero

let a = -0;
let result = (a >= 0) ? ((a == 0) ? "Zero" : "Positive") : "Negative";
console.log(result);

// Multiple  ternary operators
let speed = 50;
let message = speed >= 120 ? "Too Fast" : speed >= 80 ? "Fast" : "Ok";
console.log(message);