async function fetchToDo(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    if(!response.ok){
        throw new Error(`ToDo request failed: ${response.status}`);
    }
    const toDo = await response.json();
    return toDo;
}

async function fetchUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if(!response.ok){
        throw new Error(`User request failed: ${response.status}`);
    }
    const user = await response.json();
    return user;
}

async function getResults() {
    try {
        const allResults = await Promise.all([
            fetchToDo(),
            fetchUser()
        ]);

        console.log("Promise.all result:", allResults);

        const firstResult = await Promise.race([
            fetchToDo(),
            fetchUser()
        ]);

        console.log("Promise.race result:", firstResult);
    } catch (error) {
        console.error("Request failed:", error);
    }
}

getResults();