import express, { Request, Response, NextFunction } from 'express';

const usersRouter = express.Router();

usersRouter.use((req: Request, res: Response, next: NextFunction) => {
    console.log('middlewar users');
    next();
});

usersRouter.get('/login', (req: Request, res: Response) => {
    res.send('login');
});

usersRouter.get('/register', (req: Request, res: Response) => {
    res.send('register');
});

export default usersRouter;
