//=== Array Literal ===//
// array declaring
let a = [1, 2, 3, 4, 5, "Niraj", true, "apple"];
// array element assessing
console.log(a);

// array element changing
a[5] = "Kumar";
console.log(a);



// 1) Access array element using for loop 🙋‍♀️==>

const arr = [10,20,30,40,50];
for(let i=0; i<arr.length; i++){
    delete arr[0];
    console.log(arr[i]);
}
 


// 2) Access array index by using for..in loop 🙋‍♀️ ==>

const num = ['John', 'Alice', 'Bob', 'Emily', 'Michael'];
for(let elements in num){
    console.log(elements);
}



// 3) Access array element using for..of loop 🙋‍♀️ ==>

const num2 = ['John', 'Alice', 'Bob', 'Emily', 'Michael'];
for(let elements of num2){
    console.log(elements);
}



// 4) forEach(): Call a function for each element in array 🙋‍♀️ ==>

const num1 = ['John', 'Alice', 'Bob', 'Emily', 'Michael'];
num1.forEach(function(element, index, array){
    console.log(index, element, array);
    console.log(array);
})



/* 5) map(): method to creates a new array by performing a function on each array element. 🙋‍♀️ ==>*/

// let a1 = [2, 3, 5, 6, 9];
// let division = a1.map((number)=>{return number*10});
// console.log(division);


// let a2 = [
//     {fname: 'Niraj', lname: 'Kumar'},
//     {fname: 'Suraj', lname: 'Singh'},
//     {fname: 'Siwani', lname: 'Sinha'},
//     {fname: 'Nikita', lname: 'Kumari'}
// ]

// let b = a2.map((key)=>{
//     return key.fname + " " + key.lname;
// })
// console.log(b);


