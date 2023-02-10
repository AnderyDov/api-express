import express, { Express } from 'express';
import usersRouter from './users/users';
import { Server } from 'node:http';

export class App {
    app: Express;
    server: Server;
    port: number;

    constructor() {
        this.app = express();
        this.port = 8000;
    }

    useRouts() {
        this.app.use('/users', usersRouter);
    }

    public async init() {
        this.useRouts();
        this.server = this.app.listen(this.port);
        console.log(`http://localhost:${this.port}`);
    }
}
