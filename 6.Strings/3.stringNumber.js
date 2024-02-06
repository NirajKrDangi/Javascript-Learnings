// 👉 number(): Convert string to number. ==>
let n = '16';
console.log(Number(n));   



// 👉 parseInt(): it converts the given string into an integer number. ==>n
let a = "10 20 30";
let b = "10.33";
let c = "030 Ram in good";
let d = "he was 50";
console.log(parseInt(a));  // 10
console.log(parseInt(b));  // 10
console.log(parseInt(c));  // 30
console.log(parseInt(d));  // NaN



// 👉 parseFloat(): it converts the given string into a floating point number. ==>
// let a = "10 20.20 30";
// let b = "10.33";
// let c = "03.01 Ram in good";
// let d = "he was 50.30";
// console.log(parseFloat(a));  // 10
// console.log(parseFloat(b));  // 10.33
// console.log(parseFloat(c));  // 30.01
// console.log(parseFloat(d));  // NaN



// 👉 isFinite(): It determines whether the given value is a finite number. ==>
// let a = 1/0;
// let b = 4/2;
// let c = 0/0;
// let d = true/false;
// console.log(a + " " + isFinite(a));
// console.log(b + " " + isFinite(b));
// console.log(c + " " + isFinite(c));
// console.log(d + " " + isFinite(d));



// 👉 toFixed(): It returns the string that represents a number with exact digits after a decimal point. ==>
// let a = 5.34567;
// let b = 0.0034; 
// console.log(a.toFixed(2));
// console.log(b.toFixed(8));



// 👉 toPrecision(): It returns the string representing a number of specified precision. ==>
let a = 5.7556;
console.log(a.toPrecision(2));