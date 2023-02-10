import express, { Request, Response, NextFunction } from 'express';
import usersRouter from './users/users.js';

const host = '127.0.0.1';
const port = '3000';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(Date.now());
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send('Home page');
});

app.get('/hello', (req: Request, res: Response) => {
    res.send('hello');
});

app.use('/users', usersRouter);

app.use((req: Request, res: Response) => {
    res.send('Error 404');
});

app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});
