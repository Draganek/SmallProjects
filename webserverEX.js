const express = require('express');
const port = 3000;

const app = express();

const users = [
    { id: 1, name: 'Janek', email: 'janek@gmail.com' },
    { id: 2, name: 'Adam', email: 'adam@gmail.com' },
    { id: 3, name: 'Tomasz', email: 'tomek@my.com' },
    { id: 4, name: 'Dawid', email: 'dawid@email.com' },
    { id: 5, name: 'Kuba', email: 'kuba@email.com' },
  ];

app.get('/', (req, res) => {
    res.send('Home Page')
});

app.get('/kontakt', (req, res) => {
    res.send('hello kontakt')
});

app.get('/profile', (req, res) => {
    let printusers = users.map(user => {return(`<a href="/profile/${user.id}">- ${user.name} (id: ${user.id})</a> <br>`)}).join(' ')
    
    res.send(`<h1>Znaleziono ${users.length} profile.</h1><h2>${printusers}</h2>`)
});

app.get('/profile/:id/:mode?', (req, res) => {
    const { id, mode } = req.params;
    const foundedName = users.find(x => x.id === Number(id));
    let message = `Dane użytkownika: Imię: "${foundedName.name}"`
    if (mode === "szczegoly") {
        message += `, id: "${foundedName.id}", email: "${foundedName.email}"`}
    res.send(message)
});

app.listen(port);
