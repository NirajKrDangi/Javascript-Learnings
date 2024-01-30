//👉FUNCTION WITH AN UNLIMITED NUMBER OF PARAMETER

// argument keyword in function -->
function add() {
    // check argument element 
    // console.log(arguments);
    // console.log(arguments[0]);

    // check argument elements length
    // console.log(arguments.length);
}

// function call
// add(4, 5, 8, 9, 7);
// add(4, 5, 8, 9);
// add(4, 5, 8);



//--------------------------------------------------------------//
// Addition of multiple argument 

function addition() {
    if (arguments.length == 0) {
        console.log("You are not input any argument value");
    } else {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            var total = sum += arguments[i];
        }
        console.log(total);
    }
}

// calling function
addition(2, 4, 6, 7, 8);  // output: 27 
addition(-2, - 4, 4, 2, 0, 0);  // output: 0
addition(null);  // output: 0
addition();  // output: You are not input any argument value


//--------------------------------------------------------------//

// spread operator: "..." spread operator to allow for an unlimited number of parameters

// function sum(...numbers){
//     let result = 0;
//     for(let element of numbers) {
//         result += element;
//     }
//     console.log(result);
// }

// // function calling
// sum(1,2,3,4,5,6,7,8,9);  // output: 45