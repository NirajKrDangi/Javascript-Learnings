// // Program for a Simple Calculator
// let result;

// // Take the operator input 
// const prompt = require("prompt-sync")({ sigint: true });
// const operator = prompt("Enter operator (either +, -, *, /, %): ");

// // Take the operand input
// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

// switch (operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;
//     case '%':
//         result = number1 % number2;
//         console.log(`${number1} % ${number2} = ${result}`);
//         break;
//     default:
//         console.log("Invalid Operator");
//         break;
// }

// 1) multiple case switch program -->

let fruit = "mango";
switch(fruit){
    case 'mango':
    case 'apple':
    case 'banana':
    case 'grapes':
        console.log(`${fruit} is a fruit`);
        break;
    default:
        console.log(`${fruit} is not a fruit`);
        break;    
}


// Day of the week
let day = 2;
let dayName;
switch(day){
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;    
    case 6:
        dayName = 'Friday';
        break;    
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid Input? Please Input b/w (1 - 7)';        
}
console.log(dayName);