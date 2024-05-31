import { Logger } from '@nestjs/common';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

const log = new Logger('TestProcessor', { timestamp: true });

@Processor('test')
export class TestProcessor extends WorkerHost {
  async process(job: Job<any, any, string>) {
    log.log('transcode start' + job.id);
    // sleep for 5 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    log.log('transcode end' + job.id);

    return {};
  }
}
