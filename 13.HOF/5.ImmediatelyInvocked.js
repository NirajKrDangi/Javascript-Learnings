/**
 * - An IIFE is a javascript function that runs as soon as it is defined.
 * It is a design pattern which is also known as a self-executing anonymous function.
 */

(function () {
    var aName = "Niraj"
    console.log(`Author of this page is ${aName}`);
})();

// another way: without using variable: 
(function (aName) {
    console.log(`Author of this page is ${aName}`);
})("Niraj");