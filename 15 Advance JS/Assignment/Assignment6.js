function fetchDataFromAPI(apiUrl) {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Fetched data: ', data);
        })
        .catch((error) => {
            console.log('Error while fetching data: ', error);
        })
}

fetchDataFromAPI('https://jsonplaceholder.typicode.com/todos/1');