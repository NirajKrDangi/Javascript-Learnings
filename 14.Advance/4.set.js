//=>Set: Set is a collection of unique values
// --new Set(): Creates a new Set

let oneSet = new Set(["a", "b", "c"])
console.log(oneSet.size);


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//=>add(value): Adds a new value to the set. Returns the set.
let letters = new Set();
//--add values to the set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
console.log(letters.size);



//--Create a Set and add variables:
//-create variable

const a = "a";
const b = "b";
const c = "c";

// -create a set 
const letters = new Set();

// -add variable to the set
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters.size); //output: 3




// If you add equal elements, only the first will be saved:

const a = "a";
const b = "b";
const c = "c";
const d = "a";
const e = "a";
const f = "a";
// const mySet1 = new Set();

mySet1.add(a);
mySet1.add(b);
mySet1.add(c);
mySet1.add(d);
mySet1.add(e);
mySet1.add(f);
console.log(mySet1.size);  //output: 3

// forEach() method
mySet1.forEach(function(value){
    console.log(value);
});



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//=> clear(): Removes all the values from the set. Returns undefined.
const mySet2 = new Set([1, 2, 3, 3]);   // Define set value ->

console.log(mySet2.size);   // Print on console set size ->

// *** Printing set values one by one by using forEach() method ->

mySet2.forEach(function(value){
    console.log(value)
});

console.log(mySet2);   // Before removing set value ->
mySet2.clear();   // After remove all set value ->
console.log(mySet2);



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//*** delete(value): Removes a value from the set. Returns a boolean indicating whether the value was present in the set or not.

const mySet3 = new Set([1, 2, 3]);
mySet3.delete(2);  //Set(2) { 1, 3 }
console.log(mySet3);

// output: apple 
//         banana
//         cherry



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//*** has(value): Returns a boolean indicating whether the set contains a specific value or not.

const myData5 = new Set(["Apple", "Mango", "Banana"]);
console.log(myData5.has("Mango"));  // true
console.log(myData5.has("mango"));  // false
console.log(myData5.has("grapes"));  // false



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//*** entries(): Returns an iterator of [value, value] pairs for each value in the set.

const mySet4 = new Set([1, 2, 3]);
const iterator1 = mySet4.entries();
for(let entry of iterator1){
    console.log(entry);
} 


example: 2
const myData = new Set(["a", "b", "c", "d"]);
const total = myData.entries();
for(let entry of total){
    console.log(entry);
}

[ 'a', 'a' ]
[ 'b', 'b' ]
[ 'c', 'c' ]


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// keys(): Returns an iterator of the values in the set.

const myData6 = new Set(['apple', 'banana', 'grapes']);
const myKey = myData6.keys();
for(let keys of myKey){
    console.log(keys);
}

'apple'
'banana'
'grapes'



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// values(): Returns an iterator of the values in the set.

const mySet = new Set(['apple', 'banana', 'cherry']);
const values = mySet.values();
for (const value of values) {
  console.log(value);
}

// Note that entries(), keys(), and values() all return iterators, which means you can use them with the for...of loop to iterate over the values in the set.


/*** Example-1: Set Difference */

function setDifference(setA, setB){
    return new Set([...setA].filter(el => !setB.has(el)));
}

let A = new Set([10, 20, 30]);          // Convert array to set
let B = new Set([11, 22, 33, 33, 22]);  // Convert array to set
console.log(setDifference(A, B));
