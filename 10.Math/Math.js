// 👉 *** Math Objects ***🙋‍♀️
// The javascript math object allow us to perform mathematical operation on numbers.


// 👉 Math.PI: return the value of PI: ==>
console.log('✔ Math.PI:  '+ Math.PI);   // output: 3.141592653589793


// 👉 Math.round(x):  returns the value of x rounded to its nearest integer: ==>
let num = 10.49; 
let num2 = 10.51;
console.log('✔ Math.round(10.49):  '+ Math.round(num));   // output: 10
console.log('✔ Math.round(10.51):  '+ Math.round(num2));   // output: 11


// 👉 Math.pow(x, y): returns the value of x to the power of y: ==>
console.log('✔ Math.pow(5, 2):  '+ Math.pow(5, 2));   // output: 25 


// 👉 Math.sqrt(x): returns the square root of x: ==>
console.log('✔ Square root (64):  '+ Math.sqrt(64));   // output: 8


// 👉 Math.cbrt(x): returns the square root of x: ==>
console.log('✔ Cube root (64):  '+ Math.cbrt(64));   // output: 4


// 👉 Math.abs(x) returns the absolute (positive) value of x: ==>
console.log('✔ Math.abs(-4.5):  '+ Math.abs(-4.5));    // output: 4.5


// 👉 Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments: ==>
console.log('✔ Math.min(0, 150, 30, 20, -8, -200):  '+ Math.min(0, 150, 30, 20, -8, -200));
console.log('✔ Math.max(0, 150, 30, 20, -8, -200):  '+ Math.max(0, 150, 30, 20, -8, -200));


// 👉 Math.ceil(): returns the value of x rounded up to its nearest integer: ==>
console.log('✔ Math.ceil():  '+ Math.ceil(34.9678903));    // 35 


// 👉 Math.floor(): return down word Integer part of a number: ==>
console.log('✔ Math.floor():  '+ Math.floor(34.9678903));   // 34



// 👉 Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
// Math.random() always returns a number lower than 1.
console.log('✔ Math.random():  ' + Math.random());

// return from 1 - 10 -->
console.log('✔ Random Number(1 - 10):  ' + Math.floor((Math.random() * 10)+1));

// return from 1 - 100 -->
console.log('✔ Random Number(1 - 100):  ' + Math.floor((Math.random() * 100)+1));
