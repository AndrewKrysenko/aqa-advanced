import axios from "axios";
import {describe, test, expect} from "@jest/globals";
const apiUrl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
describe("JSONPlaceholder API", () => {
  test("get ToDo item", async () => {
    const response = await apiUrl.get("/todos/1");
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
  });

  test("get User", async () => {
    const response = await apiUrl.get("/users/1");
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
  });

  test("Create a new user", async () => {
    const response = await apiUrl.post("/users", {
      name: "New User 1",
      username: "newuser1",
      email: "newuser1@example.com",
    });
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("username", "newuser1");
  });

  test("Create second new user", async () => {
    const response = await apiUrl.post("/users", {
      name: "New User2",
      username: "newuser2",
      email: "newuser2@example.com",
    });
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("username", "newuser2");
  });

  test("Create new toDo item", async () => {
    const response = await apiUrl.post("/todos", {
      title: "New ToDo item",
      completed: false,
      userId: 1,
    });
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("title", "New ToDo item");
  });
}); 
