// Assignment-6: Nested Objects

function personFun(obj) {
    const { name, address: { street } } = obj;
    return { name, street };
}

const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
}
const result = personFun(person)
console.log(result);