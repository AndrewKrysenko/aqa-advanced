class ToDoService {
    async fetchToDo() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
            throw new Error(`ToDo request failed: ${response.status}`);
        }

        const todo = await response.json();

        return todo;
    }
}

class UserService {
    async fetchUser() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`User request failed: ${response.status}`);
        }

        const user = await response.json();

        return user;
    }
}

const toDoService = new ToDoService();
const userService = new UserService();

async function getResults() {
    try {
        const allResults = await Promise.all([
            toDoService.fetchToDo(),
            userService.fetchUser()
        ]);

        console.log("Promise.all result:", allResults);

        const firstResult = await Promise.race([
            toDoService.fetchToDo(),
            userService.fetchUser()
        ]);

        console.log("Promise.race result:", firstResult);
    } catch (error) {
        console.error("Request failed:", error);
    }
}

getResults();