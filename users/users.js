import express from 'express';

const usersRouter = express.Router();

usersRouter.get('/login', (req, res) => {
    res.send('login');
});

usersRouter.get('/register', (req, res) => {
    res.send('register');
});

export default usersRouter;
