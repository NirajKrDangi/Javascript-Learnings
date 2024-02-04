// === Method of an Array === //

// 1) Sort: The sort() method sorts an array alphabetically 🙋‍♀️ ==>
const fruit = ["Apple", "Mango", "Grapes", "Banana", "Coconut"];
fruit.sort();
console.log(fruit);

// Numeric sort in ascending order --->
var num = [4, 5, 1, 34, 500, 47, 34, 89];
console.log(num.sort(ascending));
function ascending(a, b) {
    return a - b;
}

// Numeric sort in descending order --->
var num = [4, 5, 1, 34, 500, 47, 34, 89];
console.log(num.sort(descending));
function descending(a, b) {
    return b - a;
}

// Object Sort --->
let array = [
    { name: 'Niraj', age: 25 },
    { name: 'Raj', age: 21 },
    { name: 'Amit', age: 23 },
    { name: 'diik', age: 28 },
    { name: 'dimu', age: 14 }
]

let c = 'age';

let a = array.sort((a, b) => {
    if (a[c] > b[c]) return 1;
    else if (b[c] > a[c]) return -1;
    else return 0;
})

console.log(a);


let b = array.sort((a, b)=>{
    return a - b;
})
console.log(b);



// 2) Reverse: The reverse() method reverses the elements in an array 🙋‍♀️ ==>
// const fruit = ["Apple", "Mango", "Grapes", "Banana", "Coconut"];
// fruit.sort();
// console.log(fruit);
// fruit.reverse();
// console.log(fruit);



// 3) Pop() & Push(): delete and add element in last and return new array with new array size 🙋‍♀️ ==>
// const myFruit = ["Apple", "Mango", "Grapes", "Banana", "Coconut"];
// let pushedElement = myFruit.push("Orange","Orange");
// let popedElement = myFruit.pop();

// console.log("Push Element: "+ pushedElement);
// console.log("Pop Element: " + popedElement);
// console.log(myFruit);



// 4) shift(): delete element in first 🙋‍♀️ ==>
// const fruit = ["Apple", "Mango", "Grapes", "Banana", "Coconut"];
// let deleteArr = fruit.shift();
// console.log("Deleted Element: " + deleteArr);
// console.log("After Deleted: " + fruit);



// 5) unshift(): add element in first 🙋‍♀️ ==>
// const fruit = ["Apple", "Mango", "Grapes", "Banana", "Coconut"];
// let addInFirst = fruit.unshift("Orange");
// console.log("After Adding in first: " + fruit);



// 6) concat(): The concat method creates a new array by merging (concatenating) existing arrays 🙋‍♀️ ==>
// const a = ["Roushan", "Nishant", "Sandeep", "Piyush"];
// const b = ["Uttam", "Ranjan", "Abhisek", "Satish"];
// let c = a.concat(b);
// console.log(c);
// console.log(c.join(" | "));



// 7) join(): The join method also joins all array elements into a string 🙋‍♀️ ==>
// const a = ["RedApple", "RedMango", "GreenGrapes"];
// var join = a.join(" * ");
// console.log(join);



// 8) slice(): The slice() method creates a new array. It does not remove any elements from the source array  🙋‍♀️ ==>
// const fruit = ["Apple", "Mango", "Grapes", "Banana", "Coconut"];
// console.log(fruit.slice(2, 4));
// console.log(fruit.slice(-3, -1));



// 9) splice():- adds new items to an array 🙋‍♀️ ==>
// splice(index, how many delete, new value)
// 2 -> position where new elements should be added.
// 0 -> how many elements should be removed.

// const fruit = ["Apple", "Mango", "Grapes"];
// console.log("Array Element before splice(): " + fruit);
// fruit.splice(2, 0, "Niraj", "Roushan");
// console.log(fruit);



// 10) Array.isArray(): method to check given variable is array or not, it is return boolean value called true or false 🙋‍♀️ ==>
// const fruit = ["Apple", "Mango", "Grapes"];
// var a = Array.isArray(fruit);
// console.log(a);



// 11) toStrings(): Converting Arrays to strings 🙋‍♀️ ==>
// const fruit = ["Apple", "Mango", "Grapes", "Banana", "Coconut"];
// let string = fruit.toString();
// console.log(string);



// 12) delete() 🙋‍♀️ ==>
// const fruit = ["Apple", "Mango", "Grapes", "Banana", "Coconut"];
// delete fruit[2];
// console.log("After Deleted: " + fruit);

// delete element using splice method
// const fruit = ["Apple", "Mango", "Grapes", "Banana", "Coconut"];
// fruit.splice(0, 2);
// console.log(fruit.join("  "));



// 13) lastIndexOf(): The lastIndexOf() method returns the index of the last occurrence of the searchElement in the array. It returns -1 if it cannot find the element. 🙋‍♀️ ==>



// 14) indexOf(): for forward searching, if element not found in array then return -1. 🙋‍♀️ ==>
// const fName = ['Kajal', 'Rani', 'Niraj', 'Shilpi', 'Niraj'];
// console.log(fName.indexOf("Niraj", 2));



// 15) lastIndexOf():  for backward searching, if element not found in array then return -1. 🙋‍♀️ ==>
// const fName1 = ['Kajal', 'Rani', 'Niraj', 'Shilpi', 'Niraj'];
// //             [   0        1       2        3         4   ];
// console.log(fName1.lastIndexOf("Niraj",4)); // 4
// console.log(fName1.lastIndexOf("Niraj",3)); // 2



// 16) filter(): Method to creates a new array with array elements that pass a test.🙋‍♀️ ==>
// let age = [18, 20, 10, 12];
// console.log(age);

// var b = age.filter(checkAdult);
// console.log(b);

// function checkAdult(age){
//     return age>=18;
// }



// 17) toString(): method to converts an array to a string of (comma separated) array values 🙋‍♀️ ==>
// var a = ['Kajal', 'Rani', 'Niraj', 'Shilpi', 'Niraj'];
// console.log(a.toString());
// console.log(a.join(" * "));



// 18) forEach(): call a function for each element in array 🙋‍♀️ ==>
// const num1 = ['Niraj', 'Kajal', 'Rani', 'Shilpi', 'Nishu'];
// num1.forEach(function(element, index){
//     console.log(index + " : " + element);
// })



// 19) includes(): for forward searching in array - return true & false 🙋‍♀️ ==>
// const fName2 = ['Kajal', 'Rani', 'Niraj', 'Shilpi', 'Niraj'];
// console.log(fName2.includes("Rani", 1));



// 20) fill(): change array element and fill with different 🙋‍♀️ ==>
// const fname = ['Kajal', 'Rani', 'Niraj'];
// console.log(fname.fill("Ram"));

// Output: [ 'Ram', 'Ram', 'Ram' ]