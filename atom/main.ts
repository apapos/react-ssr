import { NestFactory } from '@nestjs/core';
import { AppModule } from '@atom/app';
import { HttpFilter } from '@atom/filter/http.filter'
import { HttpInterceptor } from '@atom/interfaces/http.interfaces';
const port = 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new HttpFilter())
  app.useGlobalInterceptors(new HttpInterceptor())

  await app.listen(port, () => {
    console.log(`[Nest] Nest React SSR is running at http://localhost:${port}`);
  })
}
bootstrap();
