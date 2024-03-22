// Assignment5: Implementing a person class with default value

class Person{
    constructor(name = "Unknown", age = 0){
        this.Name = name;
        this.Age = age;
    }
    getDetails(){
        return `Name: ${this.Name}, Age: ${this.Age}`;
    }
}

const person1 = new Person("Niraj", 20);
console.log(person1.getDetails());

const person2 = new Person();
console.log(person2.getDetails());

/**
 * :::OUTPUT:::
 * Name: Niraj, Age: 20
 * Name: Unknown, Age: 0
 */