import { Injectable } from '@nestjs/common';
import { render } from '@web/main'
import { Response } from 'express'

@Injectable()
export class AppService {
  getHello(res: Response) {
    const { pipe } = render({
      onShellReady() {
        pipe(res)
      },
    })
  }
}
