// Assignment-1: Double Using Callback

const doubleElement = function(arr, callback){
   return arr.map(callback);
}

function double(num){
    return num*2;
}

const inputArray = [10, 20, 30, 40, 50];
const result = doubleElement(inputArray, double)
console.log(result);

// Output:::
// [ 20, 40, 60, 80, 100 ]

