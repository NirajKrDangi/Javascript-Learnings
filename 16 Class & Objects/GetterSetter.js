// Getter Methods --->
// const person = {
//     firstName: 'Anuj',
//     lastName: 'Kumar',
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(person.fullName)



// Setter Methods --->
const person = {
    firstName: 'Anuj',
    lastName: 'Kumar',
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.firstName = 'Rohan Sharma'
console.log(person.firstName);
console.log(person.lastName);
