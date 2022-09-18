import { Global, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { configFile } from 'src/config/config.service';
import { QueuesProcessor } from './queues.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'queues',
      redis: {
        ...configFile().redis_queue_config,
      },
    }),
  ],
  controllers: [],
  providers: [QueuesProcessor],
  exports: [],
})
export class QueuesModule {}
