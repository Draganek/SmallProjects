import express from 'express'
import path from 'path';
import { sendWelcomeMessage } from './mailer.js';


const emails = []

const __dirname = path.resolve();
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.post('/', async (req, res) => {
    const { email } = req.body;
    emails.push(email);
    console.log("Baza maili zaktualizowana: ", emails);

    await sendWelcomeMessage(email);
    

    res.sendFile(__dirname + '/views/thanks.html')
})

app.listen(3000, () => console.log('Server słucha...'))