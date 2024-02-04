// some() & every()
var num = [10, 56, 57, 89, 90];
let a = num.every(n => n <= 100);
console.log(a);

var num = [10, 56, 57, 89, 90];
let b = num.some(n => n >= 50);
console.log(b);