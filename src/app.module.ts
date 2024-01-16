import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.local", ".env.production"],
      isGlobal: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
