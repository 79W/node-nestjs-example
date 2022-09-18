import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomLogger } from 'src/logger/custom-logger.service';
/**
 * 捕获异常
 */
@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private customLogger: CustomLogger) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    // 记录日志
    this.customLogger.error(exception.message, exception.name);

    response.status(status).json({
      status,
      message: exception.message,
      error: exception.name,
      path: request.url,
    });
  }
}
