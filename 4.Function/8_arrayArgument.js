// Array as an argument
// function declaring
function addFiveNum ([num1, num2, num3, num4, num5]){
    return num1 + num2 + num3 + num4 + num5;
}

// passing array value to number variable
let numbers = [10, 20, 30, 40 ,50];

// storing function argument in result  
let result = addFiveNum(numbers);

// calling function
console.log(addFiveNum(numbers));
