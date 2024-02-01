function sumOfAll(...numbers) {
    let sum = 0;
    for(let element of numbers){
        sum = sum + element;
    }
    console.log(sum);
}

var sum = sumOfAll(5, 5, 5, 5, 5, 5);
