// How to check data type?
// === FOR STRING ===

var myName = "Niraj kr Dangi";
console.log(myName);
console.log(typeof(myName));    //string

let message = 'I\'m also a valid string'; // use \ to escape the single quote (')
console.log(message);

let str = 'JavaScript';
str = str + ' String';
console.log(str);

let s = "Niraj";
s[0] = 'n';
console.log(s);


// === FOR NUMBERS ===

var myAge = 21;
console.log(myAge);
console.log(typeof(myAge)); //number     


// === FOR BOOLEAN ===

var iAmNiraj = true;
console.log(iAmNiraj);
console.log(typeof(iAmNiraj)); //boolean


// === BIGINT ===

let a = 2536646444848n;
let b = BigInt(564675758);
console.log(typeof(a));
console.log(typeof(b));


// === Objects ===

let contact = {
    firstName : 'Niraj',
    lastName : 'Kumar',
    email : 'niraj@gmail.com',
    phone : '+9999999999',
    address : {
        building : 'Sweet Home',
        block : 'CA',
        RoadNo : '2',
        city : 'Ranchi',
        state : 'Jharkhand'
    }
};

console.log(contact.email);