// Assignment 2: Build Robust Function in Javascript

function getPerson(obj){
    const {name, age} = obj;
    try {
        if((!name || !isNaN(name)) || (!age || isNaN(age))){
            throw new error ("Invalid Parameter Type");
        }
        return `Name: ${name}, Age: ${age}`
    } catch (error) {
        return "Invalid Parameter Type";
    }
}

console.log(getPerson({name: "Mithun"}));
console.log(getPerson({name: 45, age: "Niraj"}));
console.log(getPerson({name: 45, age: "24"}));
console.log(getPerson({ name: "Mithun", age: 20 }));
console.log(getPerson({ name: "Mithun" })); 
console.log(getPerson({ }));
console.log(getPerson({name: " ", age: " "}));

/**
 * :::OUTPUT:::
 * Invalid Parameter Type
 * Invalid Parameter Type
 * Invalid Parameter Type
 * Name: Mithun, Age: 20
 * Invalid Parameter Type
 * Invalid Parameter Type
 * Invalid Parameter Type
 */
