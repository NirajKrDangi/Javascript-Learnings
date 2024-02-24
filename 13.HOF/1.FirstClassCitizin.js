/** FIRST CLASS CITIZEN:

->> A programming language is said to have First-class functions when functions in that language treated like any other variable.
->> 1. In Javascript we can assign a function to a variable.
->> 2. Pass a function as an argument.
->> 3. Returning a functions. 

**/ 


// 1. Assign function to variable :
var greet = function(){
    console.log("Hello Mrs. Niraj");
}
greet();


// 2. Pass function as an argument :
const hlo = function(){
    return "Hello";
}

const myName = function(fn, name){
    console.log(fn() +" "+ name);
}

myName(hlo, "Niraj");


// Returning a functions :
function addition(){
    return function sum(a, b){
        return a + b;
    }
}
console.log(addition()(5, 4));