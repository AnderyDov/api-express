import express from 'express';
import usersRouter from './users/users.js';

const host = '127.0.0.1';
const port = '3000';

const app = express();

app.use((req, res, next) => {
    console.log(Date.now());
    next();
});

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/hello', (req, res) => {
    res.send('hello');
});

app.use('/users', usersRouter);

app.use((req, res) => {
    res.send('Error 404');
});

app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});
