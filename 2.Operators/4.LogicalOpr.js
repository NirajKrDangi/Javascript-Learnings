//=== Logical Operator ====//

var num1 = 5;
var num2 = 5;

// Logical AND (&&):- Only true if both expression are true.
console.log((num1 >= num2) && (num2 == num1));  // -> true
console.log((num1 > num2) && (num2 == num1));   // -> false


// Logical OR (||):- true if only one expression are true.
console.log((num1 > num2) || (num1 == num2));   // -> true
console.log((num1 <= num2) || (num1 == num2));  // -> true
console.log((num2 < num1) || (num1 > num2));    // -> false


// Logical NOT (!):- when expression is true then goes to false and vice-versa.
console.log(!false);    // -> true
console.log(!true);     // -> false
