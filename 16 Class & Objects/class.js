//+++++++++ Basic Class +++++++++++++++++++++++++++++++++++++++++++++++++++
class hello{
    message(){
        console.log("Hello Everyone!");
    }
    sorry(){
        console.log("Sorry Everyone!");
    }
}

let a1 = new hello();
a1.message();
a1.sorry();


// ++++++++++++ Constructor / Static Method +++++++++++++++++++++++++++++++

class Student {
    constructor(name, age) {
        this.studentName = name;
        this.studentAge = age;
    }

    display() {
        // console.log(this);
        console.log(`Hello ${this.studentName} Your age is ${this.studentAge}`);
    }

    static staticMethod() {
        console.log("Static Method");
    }
}

let a2 = new Student("Niraj", 18);
let b2 = new Student("Kumar", 48);

// console.log(a);
a2.display();
b2.display();

// call static method
Student.staticMethod();


// ++++++++++++ Constructor / With This Keyword ++++++++++++++++++++++++++++++++
// This: this keyword nothing but its is a object whose name is this. In another word this keyword refers to the new empty object, created by using new keyword ( let x = new product() ).

class product{
    constructor(n, p, r){
        console.log("Calling The Constructor Method: ");
        this.name = n;
        this.price = p;
        this.rating = r;
        // return 10; If we'ar returning primitive (int, float, boolean) then it will bw avoid in constructor.
        // return {x: 10, y: 20}; // If you return non-primitive then it will be returned.
    }
    // member function
    display(){
        console.log("This Refers to -> ", this);
        console.log(`Name: ${this.name} | Price: ${this.price} | Rating: ${this.rating}`);
    }
}

// new keyword: new keyword create empty & plane object.
let x = new product("Samsung s23", 20999, "⭐⭐⭐⭐⭐");
console.log(x);
x.display();


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Private data member & Getter and Setter

class myClass {
    #age;

    constructor(a){
        this.#age = a;
    }

    // display(){
    //     return this.#age;
    // }

    get ageGetter() {
        console.log(this.#age);
    }

    set ageSetter(a) {
        if(a < 0) return;
        this.#age = a;
    }

    // #privateMethod() {
    //     return 'hello world';
    // }
}

const b = new myClass();
b.ageSetter = 10;
b.ageGetter;

// console.log(a.age);
// console.log(a.display());
// console.log(a.privateMethod);
// console.log(a.#age);
