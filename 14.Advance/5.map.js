/*** Array Map: */

const ary = [11, 23, 17, 15];
const newAry = ary.map(el => el * 2);
console.log(newAry)
[ 110, 230, 170, 150 ]


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Array of Objects
// const ary = [
//     {fname : "Niraj", lname : "Kumar"},
//     {fname : "Anna", lname : "Kumar"},
//     {fname : "Sivan", lname : "Kumar"}
// ];

// const newAry = ary.map(concat);
// console.log(newAry);

// function concat(x){
//     return x.fname + " " + x.lname;
// }

// [ 'Niraj Kumar', 'Anna Kumar', 'Sivan Kumar' ]


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=> Map Objects:- A Map holds key-value pairs where the keys can be any datatype.
//=> new Map():- Creates a new Map objects

const myMap = new Map([
    ["apples", 500],
    ["banana", 800],
    ["banana", 400],
    ["grapes", 300],
    ["grapes", 500]
]);
console.log(myMap);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=> Map.set(): add elements to a map with the set() method   


const myMap1 = new Map();
myMap1.set("apple", 500);
myMap1.set("banana", 200);
myMap1.set("grapes", 300);
console.log(myMap1);
console.log(myMap1.get("apple")+1);  // 500


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=> Map.size: It returns the number of elements in a Map:

const myMap2 = new Map([["key1", 10], ["key2", 20], ["key3", 30]]);
console.log(myMap2.size);  // 3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=> Map.delete(): The delete() method removes a Map element

const myMap3 = new Map([["key1", 10], ["key2", 20], ["key3", 30]]);
const deleteMap = myMap3.delete("key1");
console.log(myMap3);  // Map(2) { 'key2' => 20, 'key3' => 30 }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=> Map.clear(): The clear() method removes all the elements from a Map

const myMap4 = new Map([["key1", 10], ["key2", 20], ["key3", 30]]);
const clearMap = myMap4.clear();
console.log(clearMap);  //undefined


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=> Map.has(): The has() method returns true if a key exists in a Map

const myMap5 = new Map([["key1", 10], ["key2", 20], ["key3", 30]]);
const hasMap = myMap5.has("key2");
console.log(hasMap); // true
console.log(myMap5.has("key4"));  // false



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// You can use for..of loop to get key and values keys & value
const iMap = new Map([["a", 10], ["b", 20], ["c", 30]]);

for(let [key, value] of iMap){
    console.log(key, value);
}

iMap.forEach((key, value)=>{console.log(value, key)});
iMap.forEach((key, value)=>{console.log(value = "Niraj", key*2)});


// *** Only Keys
for(let key of iMap.keys()){
    console.log(key);
}


// *** Only Values
for (let value of iMap.values()){
    console.log(value);
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=> Map.forEach(): The forEach() method invokes a callback for each key/value pair in a Map


const myMap6 = new Map([["key1", 10], ["key2", 20], ["key3", 30]]);
myMap6.forEach((value, key) => {
    console.log(key, value);
    // key1 10
    // key2 20
    // key3 30    
    // console.log(value); // 10 20 30

})



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//*** Converting Map to array, Map key to array and Map value to array */

// const aMyMap = new Map();
// aMyMap.set("apples", 500)
// aMyMap.set("banana", 200)
// aMyMap.set("grapes", 300)

// // Map to array
// let myArray = Array.from(aMyMap);
// console.log(myArray);  // [ [ 'apples', 500 ], [ 'banana', 200 ], [ 'grapes', 300 ] ]

// // Map key to array 
// let myKeyArray = Array.from(aMyMap.keys());
// console.log(myKeyArray);    // [ 'apples', 'banana', 'grapes' ]

// // Map value to array
// let myValueArray = Array.from(aMyMap.values());
// console.log(myValueArray);    // [ 500, 200, 300 ]



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// Map.entries(): The entries() method returns an iterator object with the [key,values] in a Map

const myMap7 = new Map([["key1", 10], ["key2", 20], ["key3", 30]]);
Object.entries(myMap7).forEach((i) => {
    console.log(i);
})
