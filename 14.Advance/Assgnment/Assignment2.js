// Assignment - 2: only unique items are allowed.
function uniqueItems(arrayItems){
    const mySet = new Set(arrayItems);
    return mySet;
}

const inputArray = [10, 10, 20, 30, 40, 40, 50];
const result = uniqueItems(inputArray);
console.log(result);