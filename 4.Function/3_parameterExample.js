// Q) Program to add two numbers using a function:--
// declaring a function
function add(a, b){     // (a, b) <- parameter
    console.log(a + b);
}

// calling function
add(4, 7);  // <- argument
add(9, 9);
add(10, 10);
add(-10, 5);
add(10, -5);

// Default Parameter
function greet(fname = "[First-Name]",lname = "[Last-Name]"){
    console.log("Hello "+ fname + " " + lname);
}
greet();
greet("niraj");
greet("niraj","Kumar");