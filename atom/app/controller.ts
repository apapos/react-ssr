import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from '@atom/app/service';
import { Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  @Get()
  async getIndex(@Req() req: Request) {
    return this.appService.getPage(req)
  }

  @Get(new AppService().getRoutes())
  async getPage(@Req() req: Request) {
    return this.appService.getPage(req)
  }

  @Get('/name')
  getName(): string {
    return 'Zhang'
  }
}
