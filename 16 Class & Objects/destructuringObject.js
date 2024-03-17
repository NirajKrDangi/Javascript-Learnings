// creating objects
let user = {
    fname : "Niraj",
    age : 21,
    dob : "10 jan 2001"
}

// defining objects name
let {fname, age, dob} = user;

// console.log(fname);
// console.log(age);
// console.log(dob);

// Use of alice name
const {fname: f, age: a, dob: janamdin} = user
console.log(f);
console.log(a);
console.log(janamdin);