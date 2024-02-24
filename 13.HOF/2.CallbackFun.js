/*** CALLBACK FUNCTION: 
 * 1. Any function that is passed as an argument is called a callback function.
 * 2. A callback is a function that is to be executed after another function has finished executing'.
 */

const funA = () => {
    setTimeout(function(){
        console.log("Welcome Function A");
        // funB();
    }, 2000);
}
const funB = () => {
    console.log("Welcome Function B");
}


funA();
funB();


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// function passed as an arguments

function personTwo(){
    console.log(`I come from the callback function`);
}

const personOne = function(friend, callback){
    console.log(`Hello! i am busy right now, I am talking to ${friend}. I will call you back`);
    callback();
}

perTwo();
perOne("Raushan", personTwo); 


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

console.log('Start');

setTimeout(function () {
    console.log("setTimeOut Executed after 2000ms");
}, 2000)

setTimeout(function () {
    console.log("setTimeOut Executed after 0ms");
}, 0)

for(let i=0; i<10000000; i++){

}

console.log('Stop');


/***************************************************************************************/

// let promise = new Promise(function (resolve, reject) {
// 	const x = "geeksforgeeks";
// 	const y = "geeksforgeeks0"
// 	if (x === y) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// promise.
// 	then(function () {
// 		console.log('Success, You are a GEEK');
// 	}).
// 	catch(function () {
// 		console.log('Some error has occurred');
// 	});
