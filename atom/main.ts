import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@atom/app';
// import { HttpFilter } from '@atom/filter/http.filter'
// import { HttpInterceptor } from '@atom/interfaces/http.interfaces';
import { createServer } from '@atom/middleware'

const port = 3006
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // app.useGlobalFilters(new HttpFilter())
  // app.useGlobalInterceptors(new HttpInterceptor())
  // app.setGlobalPrefix('fetch')
  const vite = createServer()
  app.use((await vite).middlewares)
  await app.listen(port, () => {
    console.log(`[Nest] Nest React SSR is running at http://localhost:${port}`);
  })
}
bootstrap();
