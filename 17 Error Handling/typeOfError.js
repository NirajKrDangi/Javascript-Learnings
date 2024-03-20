//=> 1. Range Error

try {
  var arr = new Array(-1);

} catch (error) {
  console.log(error.name + ": " + error.message,);
}

//--> RangeError: Invalid array length


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> 2. SyntaxError:

try {
  console.log("Hello world");
} catch (error) {
  console.log(error.name + ": " + error.message,);
}

//--> SyntaxError: Invalid or unexpected token


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> 3. Reference Error:

try {
  Niraj;
  console.log(names);

} catch (error) {
  console.log(error.name + ": " + error.message,);
}

//--> ReferenceError: Niraj is not defined


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> 4. Type Error:

try {
    let greeting = "Hello";
    greeting.toUpperCase();
    console.log(greeting());

} catch (error) {
    console.log(error.name + ": " + error.message,);
}

//--> TypeError: greeting is not a function



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> 5. Internal Error:

try {
    function recursiveFunction() {
        recursiveFunction();
    }

    recursiveFunction();

} catch (error) {
    console.log(error.name + ": " + error.message,);
}

// --> RangeError: Maximum call stack size exceeded


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> 6. Internal Error:

try {
    eval("Hello, World!");

} catch (error) {
    console.log(error.name + ": " + error.message);
}

//--> EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval'....


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=> 7. Internal Error:

try {
    decodeURIComponent('%');

} catch (error) {
    console.log(error.name + ": " + error.message,);
}

//--> URIError: URI malformed

