import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { config } from "dotenv";
import { exec } from "child_process";
import { mkdir, writeFileSync } from "fs";
import * as path from "path";
config({ path: ".env" });

async function build(documents: OpenAPIObject) {
  const build = path.resolve(process.cwd(), "docs");
  const output = path.resolve(build, "index");
  mkdir(build, { recursive: true }, () => {});
  writeFileSync(`${output}.json`, JSON.stringify(documents), {
    encoding: "utf8",
  });
  exec(`npx redoc-cli build ${output}.json -o ${output}.html`);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      transform: true,
    }),
  );
  const options = new DocumentBuilder().build();
  const documents = SwaggerModule.createDocument(app, options);
  build(documents);
  SwaggerModule.createDocument;
  SwaggerModule.setup("documents", app, documents);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
