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
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const { url } = require('inspector');
const express = require('express');
const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
// set layout
app.use(ejsLayouts);
app.set('layout', 'layouts/main');

const users = [
  { id: 1, name: 'Janek', email: 'janek@gmail.com' },
  { id: 2, name: 'Adam', email: 'adam@gmail.com' },
  { id: 3, name: 'Tomasz', email: 'tomek@my.com' },
  { id: 4, name: 'Dawid', email: 'dawid@email.com' },
];

app.get('/', (req, res) => {
  // wyrenderuj stronę główną
  res.render('pages/home'), {
    title: 'Strona główna',
    url: "req.url"
  }
});

app.get('/kontakt', (req, res) => {
  res.render('pages/company'), {
    title: 'Strona główna',
    url: req.url
  }
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(x => x.id === parseInt(id));
  res.render('pages/company'), {
    title: 'Strona główna',
    url: req.url
  }
  // wyrenderuj profil użytkownika 
  // jeśli nie ma usera wyświetl taką informacje
});

app.get('*', (req, res) => {
  res.render('errors/404', { 
    title: 'Nie znaleziono',
    layout: 'layouts/minimalistic',
    url: req.url
  });
});

app.listen(3000);
