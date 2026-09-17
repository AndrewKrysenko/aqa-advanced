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





/*
//bla
import axios from 'axios';
import { describe, expect, test } from '@jest/globals';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

describe('JSONPlaceholder API tests', () => {
    test('GET /posts/1 should return the post with ID 1', async () => {
        const response = await api.get('/posts/1');

        expect(response.status).toBe(200);

        expect(response.data).toEqual({
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\n' +
                'suscipit recusandae consequuntur expedita et cum\n' +
                'reprehenderit molestiae ut ut quas totam\n' +
                'nostrum rerum est autem sunt rem eveniet architecto',
        });
    });

    test('GET /users/1 should return the user with ID 1', async () => {
        const response = await api.get('/users/1');

        expect(response.status).toBe(200);

        expect(response.data.id).toBe(1);
        expect(response.data.name).toBe('Leanne Graham');
        expect(response.data.username).toBe('Bret');
        expect(response.data.email).toBe('Sincere@april.biz');

        expect(response.data.address).toEqual(
            expect.objectContaining({
                city: 'Gwenborough',
                zipcode: '92998-3874',
            }),
        );

        expect(response.data.company).toEqual(
            expect.objectContaining({
                name: 'Romaguera-Crona',
            }),
        );
    });

    test('GET /posts?userId=1 should return only posts belonging to user 1', async () => {
        const response = await api.get('/posts', {
            params: {
                userId: 1,
            },
        });

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data).toHaveLength(10);

        response.data.forEach((post) => {
            expect(post.userId).toBe(1);
            expect(typeof post.id).toBe('number');
            expect(typeof post.title).toBe('string');
            expect(typeof post.body).toBe('string');
        });
    });

    test('POST /posts should create a new post', async () => {
        const newPost = {
            title: 'API testing with Axios',
            body: 'This post was created during an automated API test.',
            userId: 1,
        };

        const response = await api.post('/posts', newPost);

        expect(response.status).toBe(201);

        expect(response.data).toEqual({
            ...newPost,
            id: 101,
        });
    });

    test('POST /posts should create another post with correct data', async () => {
        const newPost = {
            title: 'Learning Jest',
            body: 'Jest is used to run automated tests.',
            userId: 5,
        };

        const response = await api.post('/posts', newPost);

        expect(response.status).toBe(201);
        expect(response.data.id).toBe(101);
        expect(response.data.title).toBe(newPost.title);
        expect(response.data.body).toBe(newPost.body);
        expect(response.data.userId).toBe(newPost.userId);
    });
});
*/