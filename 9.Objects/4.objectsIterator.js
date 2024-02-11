const myObj = {
    a: "Niraj",
    b: 18,
    c: false
};


// iterate object key and values into array
Object.keys(myObj).forEach((i)=>{
    console.log(i);  // output: a b c
    // console.log(myObj[i]);
})


// fetch object array values
let value = Object.values(myObj);
console.log(value);

// output: [ 'Niraj', 18, false ]


// fetch key and values of an object as a array
let valueAry = Object.entries(myObj);
console.log(valueAry); 
// output: [ [ 'a', 'Niraj' ], [ 'b', 18 ], [ 'c', false ] ]

console.log(valueAry[0]); // [ 'a', 'Niraj' ] 
console.log(valueAry[0][0]);  // a
