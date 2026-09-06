function fetchToDo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Todo request failed, status: ${response.status}`);
        }
        return response.json();
    });
}

function fetchUser(){
    return fetch ("https://jsonplaceholder.typicode.com/users/1")
    .then(response =>{
        if (!response.ok){
            throw new Error(`User request failed, status: ${response.status}`);
        }
        return response.json();
    });
}

const allPromises = Promise.all([
    fetchToDo(),
    fetchUser()
]);

allPromises
    .then(results => {
        const [todo, user] = results;

        console.log("Todo:", todo);
        console.log("User:", user);
    })
    .catch(error => {
        console.error("Promise.all error:", error);
    });

const firstPromise = Promise.race([
    fetchToDo(),
    fetchUser()
]);

firstPromise
    .then(result => {
        console.log("First resolved result:", result);
    })
    .catch(error => {
        console.error("Promise.race error:", error);
    });