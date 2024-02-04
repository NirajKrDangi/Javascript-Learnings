//=== filter() 🙋‍♀️ ==> 
const arr = [20, 30, 45, 4, 6, 8,  22, 25];

const arr1 = arr.filter(function(val){
    return val > 10;
})
console.log(arr1);



// Example-2: 
const arr2 = [
    {
        name: "Niraj",
        position: "developer"
    },
    {
        name: "Suraj",
        position: "ui-developer"
    },
    {
        name: "Satish",
        position: "developer"
    }
]

const dev = arr2.filter(val => val.position == "developer")
console.log(dev);



//=== map() 🙋‍♀️ ==>
// const arr = [2, 3, 8, 7, 5, 7, 4];
// let arr1 = arr.map(function(val){  // anonymous function
//     return val * 10;
// })
// let arr2 = arr.map((val) => val * 2); // arrow function
// console.log(arr1);
// console.log(arr2);



//=== reduce(): The reduce() method runs a function on each array element to produce (reduce it to) a single value.-.-> The reduce() method works from left-to-right in the array. See also reduceRight().🙋‍♀️ ==>

// const arr = [2, 5, 5, 5, 5,];
// let arr1 = arr.reduce(function(currVal, preVal){
//     return currVal + preVal;
// })
// console.log(arr1);


// Q1. Find square root ==>
// const arr = [100, 81, 64, 25, 49];
// let arr1 = arr.map((curElem) => Math.sqrt(curElem));
// console.log(arr1); 


// Q2. Multiply each element by 2 and return only those element which are greater than 10 and add those number which are greater than 10. ---------------------------------------------------------

// let arr = [2, 3, 4, 8, 8];
// let arr1 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10).reduce((accumulator, curElem) => accumulator + curElem);
// console.log(arr1);