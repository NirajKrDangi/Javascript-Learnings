// Assignment-4: Access Random Elements
function extractElement(arr){
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
}
const inputArray = [10, 20, 30, 40, 50, 60];
const result = extractElement(inputArray); 
console.log(result);