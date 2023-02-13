import express, { Express } from 'express';
import usersRouter from './users/users';
import { Server } from 'node:http';
import { Loggerservice } from './logger/logger.service';
import { UserController } from './users/user.controller';

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: Loggerservice;
    userController: UserController;

    constructor(logger: Loggerservice, userController: UserController) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
    }

    homePage() {
        this.app.get('/', (req, res) => {
            res.send('HOME PAGE');
        });
    }

    useRouts() {
        this.app.use('/users', this.userController.router);
    }

    public async init() {
        this.homePage();
        this.useRouts();
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
    }
}
