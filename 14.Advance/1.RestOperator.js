/*** function with multiple arguments */
function sum() {
    let sum = 0;
    for (let i in arguments) {
        sum += arguments[i];
    }
    console.log(sum);
}
sum(5, 5, 5, 5, 5, 5); // output: 30
sum(5, 5, 5, 5);  // 20
sum(5, 5);  // 10 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*** Rest Operator: It allows you to gather multiple arguments into a single array */

function sum(name, ...args) {
    console.log(`Hello ${name}: `);
    let sum = 0;
    for(let i in args){
        sum = sum + args[i];
    }
    console.log(sum);
}
sum("Niraj", 10, 20, 30);
// output: Hello Niraj 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*** convert function arguments to an array */

function myName() {
    let Name = array.from(arguments);
    for(let i in Name){
        console.log(Name);  
    }
} 

myName("Niraj");


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*** Multiply all array by 2 */

function Data(multiplier, ...args) {
    return args.map(i => multiplier * i);
}
const arr = Data(2, 11, 22, 33);
console.log(arr);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*** Short Array Element */

// function short(...args){
//     const shortedArray = args.sort();
//     return shortedArray; 
// }

// console.log(short(5,4, 2, 3, 8, 9));




