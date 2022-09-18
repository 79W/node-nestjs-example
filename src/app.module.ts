import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { AllConfigModule } from './config/config.module';
import { AllExceptionFilter } from './common/filters/exception/exception.filter';
import { LoggerModule } from './logger/logger.module';
import { MailModule } from './shared/mail/mail.module';
import { DataBaseModule } from './database/database.module';
import { RedisCacheModule } from './cache/redis-cache.module';
import { TasksModule } from './common/tasks/tasks.module';
import { QueuesModule } from './common/queues/queues.module';
import { configFile } from './config/config.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    LoggerModule,
    MailModule,
    AllConfigModule,
    DataBaseModule,
    RedisCacheModule,
    TasksModule,
    QueuesModule,
    ApiModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
