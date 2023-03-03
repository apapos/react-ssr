import { Controller, Get } from '@nestjs/common';
import { HomeService } from '@atom/modules/home/service';

@Controller()
export class HomeController {
  constructor(private readonly appService: HomeService) { }

  @Get('/home')
  getHome() {
    return this.appService.getHome();
  }
}
