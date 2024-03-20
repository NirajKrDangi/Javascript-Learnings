//=> try: statement defines a code block to run (to try).
//=> catch: statement defines a code block to handle any error.

try {
    console.log("Start of Try");
    blala;
    blala();
    console.log("End of Try");
} catch (error) {
    console.log(error);
    console.log(error);
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> error.name, .message, stack

try {
    console.log("Start of Try");
    blabla;
    console.log("End of Try");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> try and catch : console.error(error)

try{
    nonExistingFunction();
} catch(error) {
    console.error(error.message);
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> throw: The throw statement allows you to create a custom error.

try{
    var a = 11;
    if(a < 10){
        throw new Error("error occurs: variable is less than 10")
    }
} catch(error) {
    console.log(error.message);
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> final: After try and catch final block definitely executed

try {
    niraj()
} catch (error) {
    console.log(error.message)
} finally {
    console.log("create function with name niraj()")
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=>form validation
 
const prompt = require("prompt-sync")({ sigint: true });
var names = prompt("Enter Your Name: ");
console.log(`Hello ${names}, How Are You!`);



try{
    niraj();
} catch(error) {
    console.log(error.name +" : "+ error.message);
} finally {
    console.log("First-of-all define function with name()");
}