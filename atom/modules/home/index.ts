import { Module } from '@nestjs/common';
import { HomeController } from '@atom/modules/home/controller';
import { HomeService } from '@atom/modules/home/service';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule { }
