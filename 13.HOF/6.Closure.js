/** 
    CLOSER:- closer in action that is inner function can have access to the outer function variable/parameter as well as all the global variable.
*/

// const outerFun = (a) => {
//     var b = 10;
//     const innerFun = () => {
//         console.log(a + b);
//     }
//     innerFun();
// }
// outerFun(10);



// Example-2 ==>
function outerFunction() {
    const outerVar = 'Main hoon outer scope ka variable';

    function innerFunction() {
        console.log(outerVar); // Output: 'Main hoon outer scope ka variable'
    }

    return innerFunction; // Inner function ko return kar rahe hain
}

const closureExample = outerFunction(); // Outer function ko call kiya aur inner function ko 'closureExample' variable mein store kiya
closureExample(); // Inner function ko call kiya

