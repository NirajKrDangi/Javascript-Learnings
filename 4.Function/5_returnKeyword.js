// Function with return value
function sum(math, phy, sci){
    var s = math+phy+sci;
    return s;
}

function percentage(tt){
    var per = tt/300*100;
    console.log(per);
}
var total = sum(75,75,75);
percentage(total);


// Multiple return statement -->
function compare(a, b) {
    if(a > b) {
        return "a is greater";
    } else if(a < b) {
        return "b is greater";
    } else if(a == b) {
        return "a is equal-equal b";
    }
    return 0; 
}

let a=5, b=15;
console.log(`(${a}, ${b}) = ${compare(a, b)}`);

let c=10, d=5;
console.log(`(${c}, ${d}) = ${compare(c, d)}`);

let e=10, f=10;
console.log(`(${e}, ${f}) = ${compare(e, f)}`);
