async function test(){
    console.log("2 : message");
    await console.log("3 : message");
    console.log("4 : message");
}

console.log("1 : message");
test()
console.log("5 : message");


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

async function test(){
    console.log("2 : message");
    const CallAPI = await fetch("https://dummyjson.com/products/1");
    console.log("3 : message");
    const productData = await CallAPI.json();
    console.log("4 : message");

    return productData;
}

console.log("1 : message");
const a= test()
console.log("5 : message");
console.log(a);

a.then((data)=>{
    console.log(data);
})


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


async function test() {
    const productAPI = await fetch("https://dummyjson.com/products/1$")
    const productJSON = await productAPI.json() 
    return productJSON
}
test().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Try-Catch Method:

try {
    async function test() {
        const productAPI = await fetch("https://dummyjson.com/products/1")
        const productJSON = await productAPI.json() 

        return productJSON
    }
    test().then((data)=>{
        console.log(data);
    })
} catch (error) {
    console.log(error);
}



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Promise.all(): run multiple promises at a the same time, support multiple parallel asynchronous operation

async function productAPI(apiURL) {
    const response = await fetch(apiURL)
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${apiURL}`)
    }
    return response.json()
}

async function parallelOperation() {

    try {
        const apiUrl1 = "https://dummyjson.com/products/1"
        const apiUrl2 = "https://jsonplaceholder.typicode.com/todos/1"
        const [result1, result2] = await Promise.all([
            productAPI(apiUrl1),
            productAPI(apiUrl2),
        ])
        console.log("Result 1:", result1);
        console.log("Result 1:", result2);
    } catch (error) {
        console.error("Error in parallelOperation ", error);
    }
}
parallelOperation()


