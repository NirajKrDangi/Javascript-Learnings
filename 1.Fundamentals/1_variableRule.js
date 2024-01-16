// Variable Naming Rule

var myName = "Niraj-1";          // valid
var _my_Name = "Niraj-2";        // valid
var __myName = "Niraj Kumar-3";  // valid
var _my__Name = "Niraj Kumar-4"; // valid
var $myName = "Niraj Kumar-6";   // valid
// var 1myName = "Niraj Kumar-5";   // not valid (1- numbers not allowed)
// var myName% = "Niraj kr Dangi";  // not valid (%- special characters not allowed)

// console.log($myName);

var a = "Hello Pihu";
console.log(a);
console.log(a);
console.log(a);

let num1 = 10, num2 = 20,
    num3 = 30, num4 = 40;

let var1 = true, var2 = "String", var3 = 20.30;

console.log(num1, num2, num3, num4);    // 10, 20, 30, 40
console.log(typeof(var1));    // boolean
console.log(typeof(var2));    // string
console.log(typeof(var3));    // number


// The NUll Type
let var4 = null;
console.log(typeof(var4));    // object

console.log(null == undefined);    // true
console.log(null == Object);    // false


// MAX and MIN_VALUE
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);  // 5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE);   // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE);  // -Infinity