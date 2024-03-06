/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Spread Operator: The spread operator allows you to expand an array into its individual elements.
 * example-1: 
 **/

function sum(myName, ...args){
    let sum = 0;
    args.map(i => sum+=i);
    console.log(`Hello ${myName}: ${sum}`);
}
let arrNum = [20, 10, 30, 40];
sum("Niraj", ...arrNum);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// example-2:

let arr1 = [10, 20, 30]
let arr2 = [...arr1];
let arr3 = arr1;
arr1.push(40, 50);

// console.log(arr1); // return array-> [ 10, 20, 30 ]
// console.log(...arr1); // return only value not an array-> 10 20 30

console.log(...arr2); // 10 20 30
console.log(...arr3); // 10 20 30 40 50



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// example-3:

let arr1 = [10, 20, 30, 40];
let arr2 = [50, 60, 70];
// let arr3 = arr1.concat(arr2);
let arr3 = [...arr1, ...arr2];
let arr4 = [2,...arr2, ...arr1, 7, 8];

console.log(...arr3); //10 20 30 40 50 60 70
console.log(...arr4); //2 50 60 70 10 20 30 40 7 8



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// example-3: in object

let obj1 = {
    fName: "Niraj",
    lName: "Kumar"
}

let obj2 = {
    age: 21
}

let obj3 = {...obj1, ...obj2}
console.log(obj3); //{ fName: 'Niraj', lName: 'Kumar', age: 21 }


