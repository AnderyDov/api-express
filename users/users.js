import express from 'express';

const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
    console.log('middlewar users');
    next();
});

usersRouter.get('/login', (req, res) => {
    res.send('login');
});

usersRouter.get('/register', (req, res) => {
    res.send('register');
});

export default usersRouter;
