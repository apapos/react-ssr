import { Injectable } from '@nestjs/common';
import { render } from '@client/render'
import { Request } from 'express'
import route from '@client/routes'
@Injectable()
export class AppService {
  getPage(req: Request) {
    return "<!DOCTYPE html>" + render(req)
  }

  getClientRoutePaths() {
    return route.filter(e => e.path !== '/').map(e=>e.path).join('|')
  }
}
