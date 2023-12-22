import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { NotFoundError } from 'src/errors';

@Catch(NotFoundError)
export class NotFoundErrorFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(404).json({
      statusCode: 404,
      //@ts-ignore
      message: exception.message,
    });
  }
}
