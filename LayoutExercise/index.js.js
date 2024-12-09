// 1. Przygotuj widoki dla poniższej strony:
// Założenia:
// - użyj systemu szablonów EJS
// - widoki trzymaj w folderze 'views'
// - przygotuj pliki 'header' i 'footer'
// - przygotuj layout o nazwie 'main'
// - przygotuj widoki 'home', 'contact', 'user' 
// - pliki widoku trzymaj odpowiednia w folderach: partials, pages, layouts, errors
// - przygotuj plik CSS i wczytaj go w headerze; umieść w nim proste stylowanie aby mieć pewność, że działa
// - przygotuj plik JS i wczytaj go w stopce; umieść w nim console.log('Skrypty załadowane') aby mieć pewność, że działa
// - wstać przynajmniej 1 zdjęcie na stronę
// - pliki css, js i zdjęcia umieść odpowiedni w folderzach: css, js, img

const express = require('express');
const path = require('path');
const ejsLayout = require('express-ejs-layouts');
const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// layout 
app.use(ejsLayout);
app.set('layout', 'layouts/main');
// public folder
app.use(express.static('public'));

const users = [
  { id: 1, name: 'Janek', email: 'janek@gmail.com' },
  { id: 2, name: 'Adam', email: 'adam@gmail.com' },
  { id: 3, name: 'Tomasz', email: 'tomek@my.com' },
  { id: 4, name: 'Dawid', email: 'dawid@email.com' },
];

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/kontakt', (req, res) => {
  res.render('pages/contact');
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(x => x.id === parseInt(id));

  // wyrenderuj profil użytkownika 
  // jeśli nie ma usera wyświetl taką informacje
  res.render('pages/user', {
    user
  });
});

app.get('*', (req, res) => {
  res.render('errors/404')
});

app.listen(3000);