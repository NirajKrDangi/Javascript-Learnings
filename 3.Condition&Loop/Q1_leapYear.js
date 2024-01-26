// Write a Program to find given year is leap year or not

// A year is a leap year if the following conditions are satisfied:
//   1. The year is a multiple of 400.
//   2. The year is a multiple of 4 and not a multiple of 100

const prompt=require("prompt-sync")({sigint:true});
var year = prompt("Enter a year: ");

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(year, "is a leap year");
} else {
    console.log(year, "is not a leap year");
}
