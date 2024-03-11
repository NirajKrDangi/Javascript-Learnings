// String Manipulation
function manipulateString(inputString, callback){
    const manipulatedString = inputString.toUpperCase();
    const logString = `The manipulated string is: ${manipulatedString}`;
    return callback(logString);
}

function String1(str){
    console.log(str);
}

manipulateString("Hello World!", String1);

// Output:::
// The manipulated string is: HELLO WORLD!