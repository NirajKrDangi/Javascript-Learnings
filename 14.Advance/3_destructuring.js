// Destructuring is a technique that allows you to extract data from arrays or objects and assign them to variables in a more compact way.

let user = ["Niraj", 21, "Ranchi", ["Male", 25000]];
let [names, age, city, [gender, salary]] = user;

console.log(names); // Niraj
console.log(age);   // 21
console.log(city);  // Ranchi
console.log(gender);  // male
console.log(salary);  // salary


// ==> destructuring in function

function user([name, age = 20, city]){
    console.log(name);
    console.log(age);
    console.log(city);
} 

user(["Niraj Kumar", 22, "Ranchi"]);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Restructuring in object

let user = {
    fName: "Niraj",
    age: 22,
    city: "Ranchi"
}

let {fName, age, city} = user;
let {fName: n, age: a, city: c} = user;

console.log(fName);
console.log(age);
console.log(city);

console.log(`${n} and ${a} and ${c}`);



// new destructuring.....

let arr = [10, 20, 30, 40, 50, 60, 70];

let [a, b, c, d, ...rest] = arr;
console.log(a, b, c, d, rest);
Output: 10 20 30 40 [ 50, 60, 70 ]

let [a, , , d, ...rest] = arr;
console.log(a, d, rest);

Output:  
let {a, b, c} = {a: 10, b: 20, c: 30};
console.log(a, b, c);