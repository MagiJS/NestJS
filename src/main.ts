import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import fastify from "fastify"
import { FastifyAdapter, type NestFastifyApplication } from "@nestjs/platform-fastify"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import * as SwaggerStats from "swagger-stats"
import { SwaggerTheme } from "swagger-themes"
import { SwaggerThemeNameEnum } from "swagger-themes/build/enums/swagger-theme-name"
import content from "@/../package.json"
import { LogLevel, ValidationPipe, VersioningType } from "@nestjs/common"
import { join } from "node:path"

async function bootstrap() {
  const server = fastify({ bodyLimit: 50 * 1024 * 1024 })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(server), {
    logger: ["error", "warn", "log", "debug", "verbose"],
    logLevel: LogLevel.VERBOSE
  })

  app.enableVersioning({ defaultVersion: "1", type: VersioningType.URI })
  app.enableCors({
    credentials: false,
    maxAge: 86400,
    optionsSuccessStatus: 200,
    origin: "*",
    preflightContinue: false
  })
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      transform: true,
      transformOptions: {
        excludeExtraneousValues: true,
        exposeDefaultValues: false,
        exposeUnsetFields: false,
        ignoreDecorators: false
      },
      validateCustomDecorators: true
    })
  )
  app.setViewEngine({
    engine: {
      handlebars: require("handlebars")
    },
    templates: join(__dirname, "./", "views")
  })
  const builder = new DocumentBuilder()
    .setTitle(content.name)
    .setDescription(content.description)
    .setVersion(content.version)
    .build()
  const document = SwaggerModule.createDocument(app, builder)
  const theme = new SwaggerTheme()
  const options = theme.getDefaultConfig(SwaggerThemeNameEnum.DARK)
  app.use(
    SwaggerStats.getMiddleware({
      swaggerOnly: true,
      swaggerSpec: document,
      version: content.version
    })
  )
  SwaggerModule.setup("api", app, document, options)
  await app.listen(3030, "0.0.0.0")
}
bootstrap()
