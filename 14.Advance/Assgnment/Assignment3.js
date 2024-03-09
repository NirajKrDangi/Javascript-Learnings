// Assignment-3: Swap The Values
function swapValue(arr){
    console.log('Input Array : ', inputArray);
    const [x, y] = arr;
    console.log(`X = ${x} | Y = ${y}`);
    return [y, x];
}
const inputArray = [10, 20];
const result = swapValue(inputArray);
console.log('Output Array : ', result);
console.log(`X = ${result[0]} | Y = ${result[1]}`);

// Input Array :  [ 10, 20 ]
// X = 10 | Y = 20
// Output Array :  [ 20, 10 ]
// X = 20 | Y = 10