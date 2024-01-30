//👉 FAT ARROW FUNCTION ==>

// one parameter, and single return statement -->
const square = (x) => x * x;

// two parameter, and single return statement -->
const sumOfTwoNumber = (a, b) => a + b;

// multiple statement in function -->
const sum = (x, y) => {
    console.log(`adding ${x} and ${y}`);
    return x + y;
}

// RETURNING AN OBJECTS -->
const sumAndDifference = (x, y) => ({sum: x + y, difference: x - y});  


// CALLING A FUNCTION 
let output1 = square(4);
let output2 = sumOfTwoNumber(5, 10);
let output3 = sum(10, 10);
let output4 = sumAndDifference(15, 5);


// PRINTING FUNCTION
console.log(output1);   // OUTPUT-> 16
console.log(output2);   // OUTPUT-> 15
console.log(output3);   // OUTPUT-> 20
console.log(output4);   // OUTPUT-> { sum: 20, difference: 10 }