import axios from 'axios';
import express from 'express'
import path from 'path'
import { getImages } from './services/images-service.js';

const app = express();
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const __dirname = path.resolve();
    res.sendFile(__dirname + '/views/home.html');
})

app.post('/skanuj', async (req, res) => {
    const { url } = req.body;

    const response = await axios.get(url);
    const images = getImages(response.data);

    let html = '<p>Lista zdjęć na stronie:</p>';
    images.forEach(img => html += `<img src="${img}" style="max-width: 100px">`);

    res.type('html');
    res.send(html);
})

app.listen(3000, () => console.log('Server słucha...'));
