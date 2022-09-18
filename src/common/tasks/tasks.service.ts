import { Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
/**
 * 定时任务
 */
@Injectable()
export class TasksService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  //   @Cron('1 * * * * *', {
  //     name: 'notifications',
  //   })
  //   triggerNotifications() {
  //     console.log('triggerNotifications');
  //   }

  //   @Cron('45 * * * * *')
  //   handleCron() {
  //     console.log('2');
  //   }

  //   ceshi() {
  //     const job = this.schedulerRegistry.getCronJob('notifications');

  //     job.stop();
  //     console.log(job.lastDate());
  //   }
}
