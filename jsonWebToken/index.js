import express from 'express';
import jwt from 'jsonwebtoken'

const app = express();

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, ACCESS_TOKEN, (err, data) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = data;
        next();
    })
}

app.use(express.json())

const ACCESS_TOKEN = 'dfslh3fhs9d78y2983yfisuhdfg9w324h9th398erth23984tnrweg34';
const REFRESH_TOKEN = '0985u4lkjghlkzhcq3r6jop456fgobmfghjritor8344oti9hj4059ky';

const users = [
    {id: 23, name: 'Adam', email: 'radek.draganek@gmail.com'},
    {id: 24, name: 'Radek', email: 'radek.draganek@gmail.com'}
]
const refreshTokens = [];

app.get('/', (req,res) => {
    res.send('Witaj na stronie głównej')
});

app.get('/admin', (req, res) => {
    res.send('Witaj w panelu admina');
});

app.post('/login', authMiddleware, (req, res) => {
    const user = users.find(u => u.email === req.body.email);
    if (!user) {
        return res.sendStatus(401)
    }

    const payload = user;
    const token = jwt.sign(payload, ACCESS_TOKEN, { expiresIn: '60m'});
    const refreshToken = jwt.sign(payload, REFRESH_TOKEN);
    refreshTokens.push(refreshToken);

    res.json({ token, refreshToken });
})

app.post('/refresh-token', (req, res) => {
    const { token } = req.body;
    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }

    jwt.verify(token, REFRESH_TOKEN, (err, data) => {
        if (err) {
            return res.sendStatus(403)
        }

        const payload = {
            id: data.id,
            name: data.name,
            email: data.email
        };
        const newAccesToken = jwt.sign(payload, ACCESS_TOKEN, { expiresIn: '60m'});
        res.json({ token: newAccesToken })
    })
})

app.post('/logout', (req, res) => {
    const { refreshToken } = req.body;
    refreshTokens = refreshTokens.filter(t => t !== refreshToken);
    res.sendStatus(204);
})

app.listen(3000, () => console.log('Serwer słucha...'))