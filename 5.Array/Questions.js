// Q1. Add Dec at the end of an array ?
// sol1:
const months = ["Jan", "Fab", "Mar", "Jun", "Aug"];
months.splice(5, 0, "Dec"); 
console.log(months);

// sol2:
months.splice(months.length, 0, "Dec");
console.log(months);

// Q2. What is the return value of splice method ?
const months1 = ["Jan", "Fab", "Mar", "Jun", "Aug"];
months.splice(2, 2);
console.log(months1);  

// Q3. Update march to March (Update) ?
const months2 = ["Jan", "Fab", "march", "Jun", "Aug"];
months.splice(2, 1, "March");
console.log(months2);

// sol2:
// const months = ["Jan", "Fab", "march", "April", "May"];
// const indexOfMonths = months.indexOf("Fab");

// if(indexOfMonths != -1){
//     var updatedMonths = months.splice(indexOfMonths, Infinity);
//     console.log(months);
//     console.log(updatedMonths);
// } else{
//     console.log("element not found in array");
// }