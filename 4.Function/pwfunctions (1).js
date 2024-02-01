// functions

function sayHello() {
    console.log("Hello world");
    console.log("Hello again");
}
sayHello()


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


function addTwoNumbers(num1, num2){
   var result = num1 + num2
    return result
}
const result1 = addTwoNumbers(4, 4);
console.log(result1);


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


function subTwoNum(num1, num2){
    let result = num1 - num2
    return result
}

const result2 = addTwoNumbers(3, 5)
console.log(result2);


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


function pwlogin(username="hiteshhhh"){
    if (!username) {
        return "please provide a username!"
    }
    return username + ' is logged in'
}

console.log(pwlogin("hitesh"))


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


function cartSum(...numbers){
    // get a variable - total
    let total = 0;
    // loop through all values
    // add each value to total
    for(const num of numbers){
        total += num
    }
    // return total
    return total
}
console.log(cartSum(2, 5, 7, 4))


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


const user = {
    id: 1,
    name: "hitesh",
    email: "hitesh@pw.live"
}

function addUserToDb(obj){
    console.log(`User name is ${obj.name}`);
}
addUserToDb(user);


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


function learnThis(){
    console.log(this);
}

// learnThis()

function addnums(num1, num2){
    console.log(this);
    return num1 + num2
}

const addnumsStyleTwo = (num1, num2) =>  num1 + num2

// addnums(3, 3)
// console.log(addnumsStyleTwo(3, 3))

const getObject = () => ({value: "id1233"})


// iife

(() => {
    console.log("DABASE CONNECTED");
    console.log("hitesh")
})()


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// primitive data structure : symbol
// const key1 = Symbol("key1");
// const key2 = Symbol("key2");

// const obj = {
//     personName: "Niraj",
//     friendName: "Raushan",
//     [key1] : "Niraj",
//     [key2] : "Raju"
// };

// obj.personName = "Niraj Kumar";
// obj["mail"] = true;

// // console.log(obj);
// // console.log(obj[key1]);

// // console.log(Object.keys(obj));
// // const keys = Object.keys(obj).map(key => key.toUpperCase());
// // console.log(keys);

// console.log(Object.values(obj));