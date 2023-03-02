import { Module } from '@nestjs/common';
import { AppController } from '@atom/app/controller';
import { AppService } from '@atom/app/service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
