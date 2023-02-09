import http from 'http';

const host = '127.0.0.1';
const port = '3000';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from server');
});

server.listen(port, host, () => {
    console.log(`Сервер запущен на http://localhost:3000`);
});
