import express, { Express } from 'express';
import usersRouter from './users/users';
import { Server } from 'node:http';
import { Loggerservice } from './logger/logger.service';

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: Loggerservice;

    constructor(logger: Loggerservice) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
    }

    homePage() {
        this.app.get('/', (req, res) => {
            res.send('HOME PAGE');
        });
    }

    useRouts() {
        this.app.use('/users', usersRouter);
    }

    public async init() {
        this.homePage();
        this.useRouts();
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
    }
}
