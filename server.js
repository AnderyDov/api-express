import express from 'express';

const host = '127.0.0.1';
const port = '3000';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from server');
})
    .get('/one', (req, res) => {
        res.send('one');
    })
    .get('/two', (req, res) => {
        res.send('two');
    });

app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});
