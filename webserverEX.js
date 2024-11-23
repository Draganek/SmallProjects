const express = require('express');
const port = 3000;

const app = express();

const users = [
    { id: 1, name: 'Janek', email: 'janek@gmail.com' },
    { id: 2, name: 'Adam', email: 'adam@gmail.com' },
    { id: 3, name: 'Tomasz', email: 'tomek@my.com' },
    { id: 4, name: 'Dawid', email: 'dawid@email.com' },
  ];

app.get('/', (req, res) => {
    res.send('Home Page')
});

app.get('/kontakt', (req, res) => {
    res.send('hello kontakt')
});

app.get('/profile', (req, res) => {
    let printusers = users.map(user => {return(`<a href="/profile/${user.id}>Test</a>`)})
    console.log(printusers);
    
    res.send(printusers.join(','))
});

app.get('/firmy/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Nazwa firmy: ${name}`)
});

app.listen(port);
