// every; check if all values are numbers.
var gameScore = [200, 300, 400, 230];
var gameScoreCheck = gameScore.every((x)=>typeof x === 'number');
console.log(gameScoreCheck);