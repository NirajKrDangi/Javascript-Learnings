const cartBill = [20, 30, 50, 45, 55];

const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfCartBill);