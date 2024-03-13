const obj = new Promise(function (resolve, reject){
    setTimeout(function (){
        let rollNo = [10, 11, 12, 13, 14, 15];
        // resolve(rollNo)
        reject("Error While fetching roll data")
    }, 2000)

    // Kaam sahi se ho gaya, toh resolve() ko call karte hain.
    // Agar koi error hoti, toh reject() ko call karte.

})
obj.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Function to fetch data from an API using fetch() and create a Promise


function fetchDataFromAPI() {
    const apiUrl = 'https://fakestoreapi.com/products/11'; // Replace with the actual API URL

    // Return a new Promise
    return new Promise((resolve, reject) => {
        fetch(apiUrl) // Using fetch() to make the API call
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Convert the response to JSON
            })
            .then((data) => {
                resolve(data); // Resolve the Promise with the fetched data
            })
            .catch((error) => {
                reject(error); // Reject the Promise with any errors that occurred
            });
    });
}

// Using the Promise to fetch data and handle the results
fetchDataFromAPI()
    .then((data) => {
        console.log('Fetched data:', data); // Output the fetched data
    })
    .catch((error) => {
        console.error('Error while fetching data:', error); // Output any errors that occurred
    });



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Suppositional function that returns a Promise which resolves after a delay

function delayExample() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor((Math.random()*10)+1);
            if (randomNum < 5) {
                resolve('Random Number is '+ randomNum + ' Promise is fulfilled!');
            } else {
                reject('Random Number is '+ randomNum + ' Promise is rejected!');
            }
        }, 1000);
    });
}

// Using Promise handlers
delayExample()
    .then((result) => {
        console.log('Result:', result); // Output: Result: Promise is fulfilled!
    })
    .catch((error) => {
        console.error('Error:', error); // Output: Error: Promise is rejected!
    })
    .finally(() => {
        console.log('Cleanup code executed.'); // Output: Cleanup code executed.
    });