var arr = ['Tomato', 'Cabbage', 'Spinach', 'Potato', 'Cauliflower', 'Bell Pepper', 'Lettuce', 'Onion'];

// iterate every element of an array:
arr.forEach((item, index) => {console.log(`${item} Added in Cart in Position ${index}`)});

// iterate every array element and convert to UpperCase:
arr.forEach((item, index) => {console.log(`${item.toUpperCase()} Added in Cart in Position ${index}`)})