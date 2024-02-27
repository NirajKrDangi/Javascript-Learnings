const userName = ["Rahulraj", "Niraj", "Suraj", "Raoushan", "Piyush"];
var nameWithRaj = userName.filter((x)=>{
    return x.includes('raj');
});
console.log(nameWithRaj);