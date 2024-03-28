// Spread Operator(...): 
// 1) Useful to clone an array -->

let color = ['red', 'blue', 'black'];
let rgb = [...color];
console.log(rgb);


// 2) Used to merge two or more arrays into one -->

let color1 = ['red', 'blue', 'black'];
let color2 = ['orange', 'green', 'cyan', 'magenta'];
let color3 = ['lightBlue', 'DarkGreen', 'DeepCyan'];

let merge = [...color1, ...color2, ...color3];
console.log(merge);


// 3) Expands the spread operator -->

const circle = {
    radius : 10
}
const coloredCircle = {
    ...circle,
    color: 'black'
};
console.log(coloredCircle);


// JavaScript Object spread operator use cases
// 1) Clone an object -->

const circle = {
    radius: 10,
    color: 'red'
};
console.log({...circle});


// Merging objects -->
const circle = {
    radius: 10
};
const color = {
    color: 'red'
};
const style = {
    style: 'dark'
};

const merge = {
    ...circle, 
    ...color, 
    ...style
};
console.log(merge);