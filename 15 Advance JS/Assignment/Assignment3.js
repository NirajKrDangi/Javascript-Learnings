// Assignment-3: Age in Days

const person = {
    firstName: "Niraj",
    lastName: "Kumar",
    age: 22
}

function ageInDays(obj, callback){
    const fullName = obj.firstName + " " + obj.lastName;
    const ageInDays = obj.age*365;
    return callback(fullName, ageInDays);
}

function logResult(fullName, ageInDays){
    console.log(`The person's full name is ${fullName}, and there age in days is ${ageInDays}`);
}

ageInDays(person, logResult);

// Output:::
// The person's full name is Niraj Kumar, and there age in days is 8030