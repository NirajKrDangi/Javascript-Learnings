let myData = {
    name: "niraj",
    age: 21,
    getData: function () {
        console.log(`My Name is ${myData.name} and Age is ${myData.age}`);
    }
}

// myData.getData();
console.log(myData.name);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object function without function naming

let myData1 = {
    name: "Roushan-Kumar",
    age: 22,
    getData () {
        console.log(`My Name is ${myData1.name} and Age is ${myData1.age}`);
    }
}
let a = myData1.getData();
console.log(a);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// object and inside of object

let myData2 = {
    name: {
        fName : "Niraj",
        lName : "Dangi"
    },
    age : 12,
    getData () {
        console.log(`My Name is ${myData2.name.fName} and Age is ${myData2.age}`);
    }
}
console.log(myData2.name.lName);
console.log(myData2.getData());

