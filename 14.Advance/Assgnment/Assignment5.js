// Assignment-5: Min and Max Value
function findMinMax(...spread){
    const maxNum = Math.max(...spread);
    const minNum = Math.min(...spread);
    return{
        Maximum : maxNum,
        Minimum : minNum
    };
}
const inputArray = [12, 15, 15, 12, 34, 14, 12];
const result = findMinMax(...inputArray);
console.log(result);