// Assignment-5: Greeting Promise

function mainFun(name){
    return new Promise((resolve, reject) => {
        if(name != null && isNaN(name)){
            resolve(`Hello ${name}`);
        } else{
            reject(`Name not found`);
        }
    })
}

mainFun("Niraj")
.then((data)=>{
    console.log('Result: ', data);
})
.catch((error)=>{
    console.log('Error: ', error);
})

// Output::: 
// Result:  Hello Niraj