// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

console.log(NaN === NaN);        // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true
console.log(Number.isNaN(NaN));  // true