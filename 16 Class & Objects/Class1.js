class myClass{
    myFunction(){
        console.log("Hello World!");
    }
    myFunction1(){
        console.log("Sorry!");
    }
}

let a = new myClass();
a.myFunction();
a.myFunction1();



//=> Constructor Methods:
class student {
    // constructor function
    constructor(name, age) {
        this.studentName = name;
        this.studentAge = age;
        console.log("Constructor Function");
    }
    // prototype method 
    hello() {
        console.log(`Hello ${this.studentName} Your age is ${this.studentAge}`);
    }
    // static method
    static myMethod(){
        console.log("static method");
    }

}
let x = new student("Niraj", 21);
let y = new student("Raushan", 23);
x.hello();
y.hello();

// calling static method
student.myMethod();



//=> Properties with initial values
class Person {
    constructor(fName, lName, age, city) {
        this.fName = fName
        this.lName = lName
        this.age = age
        this.city = city
        this.level = 0
        this.skill = []
    }
    getFullName() {
        const fullName = this.fName + ' ' +this.lName
        return fullName
    }
}

const person1 = new Person('Anuj', 'Kumar', 31, 'Delhi')
const person2 = new Person('Niraj', 'Dangi', 21, 'Ranchi')

console.log(person1.level);
console.log(person2.level);
console.log(person1.skill);
console.log(person2.skill);