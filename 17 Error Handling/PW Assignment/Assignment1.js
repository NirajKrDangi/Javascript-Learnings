// Assignment-1: Type Conversion

function convertToNumber(string) {
    try {
        const toNumber = Number(string);
        if(isNaN(toNumber)){
            throw new Error("Invalid Number!");
        }
        return toNumber;
    } catch (error) {
        return "Invalid Number! 😟";
    }
}

console.log(convertToNumber("55555"));