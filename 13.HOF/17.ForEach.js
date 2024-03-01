const myArr = [10, 20, 30, 40, 50];
myArr.forEach(e => console.log(e+100));


for..Of Loop --> (Iterating), Mostly used with array & string.
const myArr = [10, 20, 30, 40, 50];
for(items of myArr){
    console.log(items);
}

// for..in Loop --> (Enumerating), Mostly used with object.
let bioData = {
    name: "Niraj Kumar",
    class: "BSC-IT",
    age: 21 
}

for (key in bioData) {
    console.log(key, bioData[key]);
}