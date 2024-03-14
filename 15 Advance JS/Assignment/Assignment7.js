function fetchDataFromAPI() {
    const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json());
    const postPromise = fetch("https://jsonplaceholder.typicode.com/posts/1").then(response => response.json());
    return Promise.all([todoPromise, postPromise])
        .then(([todoData, postData]) => {
            const result = {
                todo: todoData,
                post: postData
            };
            console.log(result);
        })
        .catch(error => {
            console.error('Error Fetching data: ', error);
        })
}
fetchDataFromAPI();