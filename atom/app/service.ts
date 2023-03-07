import { Injectable } from '@nestjs/common';
import { render } from '@client/entry-server';
import * as fs from "fs";
import * as path from "path";
import route from '@client/routes';
@Injectable()
export class AppService {
  async getPage(req) {
    const app = await render(req);
    const string = fs.readFileSync(
      path.join(process.cwd(), "./build", "index.html"),
      {
        encoding: "utf8",
      }
    )
    return string.replace('<!--ssr-outlet-->', app)
  }

  getRoutes() {
    return route.filter(el => el.path !== '/').map(el => el.path).join("|")
  }
}
