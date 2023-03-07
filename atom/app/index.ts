import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '@atom/app/controller';
import { AppService } from '@atom/app/service';
import { LoggerMiddleware } from '@atom/middleware';
import { HomeModule, ServeStaticForRoot } from '@atom/modules';

@Module({
  imports: [HomeModule, ServeStaticForRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
