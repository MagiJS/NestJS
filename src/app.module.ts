import {
  type MiddlewareConsumer,
  Module,
  type NestModule,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HttpModule } from "@nestjs/axios";
import { CacheModule } from "@nestjs/cache-manager";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import { LoggerMiddleware } from "./utils/logger.middleware";

@Module({
  imports: [
    PrometheusModule.register({
      defaultMetrics: {
        config: {},
        enabled: false,
      },
    }),
    ThrottlerModule.forRoot([
      {
        limit: 100,
        ttl: 60 * 5,
      },
    ]),
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 60 * 60 * 1000,
    }),
    HttpModule.register({
      headers: {
        "accept-encoding": "gzip, deflate",
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
