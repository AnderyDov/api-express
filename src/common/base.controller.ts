import { Response, Router } from 'express';
import { Loggerservice } from '../logger/logger.service';
import { IControllerRoute } from './route.interfase';

export abstract class BaseController {
    private readonly _router: Router;

    constructor(private logger: Loggerservice) {
        this._router = Router();
    }

    get router() {
        return this._router;
    }

    public created(res: Response) {
        return res.sendStatus(201);
    }

    public send<T>(res: Response, code: number, message: T) {
        res.type('application/json');
        return res.sendStatus(code).json(message);
    }

    public ok<T>(res: Response, message: T) {
        return this.send<T>(res, 200, message);
    }

    protected bindRouter(routers: IControllerRoute[]) {
        for (const route of routers) {
            this.logger.log(`[${route.method}] ${route.path}`);
            const handler = route.func.bind(this);
            this.router[route.method](route.path, handler);
        }
    }
}
