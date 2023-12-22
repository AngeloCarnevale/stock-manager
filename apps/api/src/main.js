"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const not_found_error_filter_1 = require("./not-found-error/not-found-error.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        errorHttpStatusCode: 422,
    })); // Para utilizar a validação do class-validator
    app.useGlobalFilters(new not_found_error_filter_1.NotFoundErrorFilter());
    await app.listen(3006);
}
bootstrap();
