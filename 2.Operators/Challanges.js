// Q1. What will be the output of 3**3?
console.log(3 ** 3);  // 3*3*3 -> 27
console.log(5 ** 3 );  // 5*5*5 -> 125
console.log(10 ** -1);   // 1/10 -> 0.1

/*------------------------------------------------------------------- */

// Q2. What will be the output, when we add a number and a string?
console.log(8 + " " + "Niraj");  // -> 8 Niraj  

/*------------------------------------------------------------------- */

// Q3. Write a Program to swap two numbers?
var num1 = 10;
var num2 = 15;

var temp = num2;  // 15
num2 = num1;  // 10
num1 = temp;  // 15
console.log("The value of num1 = " + num1);
console.log("The value of num2 = " + num2);

/*------------------------------------------------------------------- */

// Q4. Write a Program to swap two numbers without using third variable?

var a = 10;
var b = 15;

a = a + b;  // a = 25
b = a - b;  // b = 10
a = a - b;  // a = 15

console.log("The value of a = " + a);  // 15
console.log("The value of b = " + b);  // 10

/*------------------------------------------------------------------- */

// Q5. What is the difference between == and ===

console.log(typeof(5));    // number
console.log(typeof('5'));  // string

console.log(5);            // 5 (number)
console.log('5');          // 5 (string)
console.log((5 == '5'));   // true: Compare only value not data type.
console.log((5 === '5'));  // false: compare value with data type.