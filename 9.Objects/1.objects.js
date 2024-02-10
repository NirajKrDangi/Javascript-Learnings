// Basics of Objects ==>

var a = {
    fName : 'Niraj',
    lName : 'Kumar',
    age  : 24,
    class: '10th',
    favMovies: ['dhoom', 'hum', 'sholy'],
    living : {
        city : 'Ranchi',
        country: 'India'
    },
    salary : function(){
        return 3400;
    }, 
    fullName : function(){
        return this.fName + " " + this.lName;
    }
}

console.log(a.age);
console.log(a.living.city);
console.log(a.favMovies[1]);
console.log(a.fullName());



// Array of Objects ==>
var array = [
    { name: 'Niraj', age: 15 },
    { name: 'Raj', age: 21 },
    { name: 'miraj', age: 23 }
]
// console.log(array);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}



// Creating an Objects ==>
var a = new Object();
a.Name = 'Niraj';
a.Age = 12;
console.log(a.Name);
console.log(a['Age']);



// The 'const' keyword behavior with array ==>
const array = [10, 20, 30, 40];
array = [30, 40];
console.log(array);  //TypeError: Assignment to constant variable.

const array1 = [10, 20, 30, 40];
array1[0] = 50;
array1[0] = 60;
console.log(array1); 



// Use for-in loop
var a = {
    fName: 'Niraj',
    lName: 'Kumar',
    age: 24,
    class: '10th'
}    
for(var key in a){
    console.log(key + " : " + a[key]);
}



let a = ()=>({email : "example@gmail.com"})
console.log(a());

function myFUnction() {
    return {email : "example@gmail.com"}
}
console.log(myFUnction());