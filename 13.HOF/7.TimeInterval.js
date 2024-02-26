/** PROBLEM: 1 */
// function x() {
//     for (var i = 0; i <= 5; i++) {      // use let i to see magic; 
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// x();


/** PROBLEM-1: in different way with using var keyword */
// function x() {

//     for (var i = 0; i <= 5; i++) {
//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000)
//         }
//         close(i)
//     }
// }
// x();


/** SetTimeout | ClearTimeout: in different way with using var keyword */
// console.log("Wait 3 second...");
// var stop = setTimeout(() => {
//     console.log("Hello Niraj");
// }, 3000);
