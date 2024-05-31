import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TestProcessor } from './app.processor';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'test',
    }),
  ],
  controllers: [AppController],
  providers: [TestProcessor],
})
export class AppModule {}
