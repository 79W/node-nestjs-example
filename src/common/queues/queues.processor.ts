import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('queues')
export class QueuesProcessor {
  @Process('ceshicode')
  handleTranscode(job: Job) {
    console.log('Start transcoding...');
    console.log(job.data);
    console.log('Transcoding completed');
  }
}
