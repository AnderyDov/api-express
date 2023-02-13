import { App } from './app';
import { Loggerservice } from './logger/logger.service';

async function bootstrap() {
    const app = new App(new Loggerservice());
    await app.init();
}
bootstrap();
