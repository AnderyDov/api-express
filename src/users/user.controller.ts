import { Response, Request, NextFunction } from 'express';
import { BaseController } from '../common/base.controller';
import { Loggerservice } from '../logger/logger.service';

export class UserController extends BaseController {
    constructor(logger: Loggerservice) {
        super(logger);
        this.bindRouter([
            { path: '/register', method: 'post', func: this.register },
            { path: '/login', method: 'post', func: this.login },
        ]);
    }

    login(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'login');
    }
    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register');
    }
}
