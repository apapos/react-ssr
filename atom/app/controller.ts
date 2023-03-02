import { Controller, Get, Res, Header } from '@nestjs/common';
import { AppService } from '@atom/app/service';
import { Response } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Header('content-type', 'text/html')
  getHello(@Res() res: Response) {
    return this.appService.getHello(res);
  }

  @Get('/name')
  getName(): string {
    return 'Zhang'
  }
}
