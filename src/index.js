const { request, response } = require("express");

const express = require("express");
const { v4 } = require("uuid");

const app = express();
app.use(express.json());

const users = [];
const todos = [];

//get USERS
app.get("/Desafio", (request, response) => {
    const { name, username } = request.params;
    return response.json(users);
});

//post USERS
app.post("/Desafio", (request, response) => {
    const { name, username } = request.body; 
    const user = { id: v4(), name, username };
    users.push(user);
    return response.json(user);
})

/*
//get TODOS
app.get("/Desafio", (request, response) => {
    const { title, deadline } = request.params;
    return response.json(todos);
});

//put TODOS
app.put("/Desafio/:id", (request, response) => {
    const { id } = request.params;
    const { title, deadline } = request.body;
    const todoIndex = todos.findIndex( todo => todo.id === id);
    if (todoIndex < 0) {
        return response.status(400).json({ error: 'Projeto não foi encontrado'});
    }
    
    const todo = {
        id,
        title,
        deadline,
    }
    todos[todoIndex] = todo;
    return response.json(todo)
});

*/

app.delete("/Desafio/:id", (request, response) => {
    const { id } = request.params;
    const todoIndex = todos.findIndex( todo => todo.id === id);
    if (todoIndex < 0) {
        return response.status(400).json({ error: 'Projeto não foi encontrado'});
    }
    todos.splice(todoIndex, 1)
    return response.status(204).json()
});

app.patch("/Desafio/:id/done", (request, response) => {
    
})



app.listen(1234)