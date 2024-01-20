// Comparison Operator

var num1 = 5;
var num2 = 10;
var num3 = "10";

// Equal (==)
// console.log(num1 == num2);  //-> false

// Equal (= = =)
console.log(num2 === num3); //-> false (check data type)
console.log(num2 == num3);  //-> true (check only value)

// Not equal (!=)
console.log(num1 != num2);  //-> true

// Greater than (>)
console.log(num1 > num2);   // -> false
console.log(num2 > num1);   // -> true

// Less than (<)
console.log(num1 < num2);   // -> true
console.log(num2 < num1);   // -> false

// Greater than or equal (>=)
console.log(num1 >= num2);   // -> false
console.log(num2 >= num1);   // -> true

// Less than (<=)
console.log(num1 <= num2);   // -> true
console.log(num2 <= num1);   // -> false