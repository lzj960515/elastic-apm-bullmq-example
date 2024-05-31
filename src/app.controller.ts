import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Controller()
export class AppController {
  constructor(@InjectQueue('test') private testQueue: Queue) {}

  @Get()
  async getHello() {
    await this.testQueue.add('transcode', {
      foo: 'bar',
    });
    return 'Hello World!';
  }
}
