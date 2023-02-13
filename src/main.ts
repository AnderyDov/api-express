import { App } from './app';
import { Loggerservice } from './logger/logger.service';
import { UserController } from './users/user.controller';

async function bootstrap() {
    const logger = new Loggerservice();
    const app = new App(logger, new UserController(logger));
    await app.init();
}
bootstrap();
