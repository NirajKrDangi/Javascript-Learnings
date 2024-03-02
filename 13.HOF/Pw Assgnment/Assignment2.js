/** Random Number Generator with delay and progress indicator */

function RandomNoGen() {
    var x = Math.floor(Math.floor(Math.random() * 10) + 1);
    console.log("Generated: " + x);
}

let i = 0;
console.log('Generating Random No...');
let intervalId = setInterval(function(){
    if (i == 5) {
        console.log("Done!");
        clearInterval(intervalId);
    } else {
        RandomNoGen();
        i++;
    } 
}, 3000);



/* :::Output::: 
 *  
 *  Generating Random No...
 *  Generated: 4
 *  Generated: 5
 *  Generated: 2
 *  Generated: 9
 *  Generated: 6
 *  Done! 
 */

