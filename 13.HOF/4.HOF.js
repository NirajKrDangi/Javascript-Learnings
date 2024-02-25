// Higher Order Function ==>
// if a function take function as a argument called higher order function: -->

// 1. Function ko variable me store kar sakten hai:-
// const add = function(a, b){
//   return a+b;
// }
// const result = add(3, 2);
// console.log(result);



//  2. Function ko dusre function mein argument ke roop me pass kar sakten hain. 
// function operation (func, a, b){
//   return func(a, b);
// }
// const sum = function(x, y){
//   return x + y;
// }
// const result = operation(sum, 5, 4);
// console.log(result);



// 3.if a function return a function called higher order function: -->

// Example-2: ==>
// function returnFunction(){
//     return getSeven;
// }
// function getSeven(){
//   console.log("This is getSeven Function");
// }
// console.log(returnFunction()());


// Example-2: ==>
// function add() {
//   return function (a, b) {
//     return a * b;
//   }
// }
// const exeFun = add();
// console.log(exeFun(5, 5));

// console.log(add()(5, 5));


// Example-3: ==>
// function sum(x) {
//   return function (y) {
//     return x + y;
//   }
// }
// console.log(sum(2)(4));


// Example-4: ==>
// function a(){
//   function b(){
//     console.log("This is function b");
//   }
//   return b;
// }
// console.log(a()());


// Example ==>
// function mainFunction(callback) {
//   console.log("Performing operation...");

//   // Use setTimeout to simulate an asynchronous operation
//   // setTimeout(function () {
//     callback("Operation complete");
//   // }, 1000);
// }

// // Define the callback function
// function callbackFunction(result) {
//   console.log("Result: " + result);
// }

// // Call the main function with the callback function
// mainFunction(callbackFunction);


// Example: Interview Questions: 
function interview(name){
    if(name === "Niraj"){
        return (ques)=>{
            console.log(`Hello ${name}, What is ${ques}? Please Explain us.`);
        }
    }
    if(name === "vicky"){
        return (ques)=>{
            console.log(`Hello ${name}, What is ${ques}? Please Explain us.`);
        }
    }
    if(name === "vikash"){
        return (ques)=>{
            console.log(`Hello ${name}, What is ${ques}? Please Explain us.`);
        }
    }
    else{
        console.log("You name is wrong!");
    }
}

interview("Niraj")("UI-UX");
interview("vicky")("Css");
interview("vikash")("Javascript");