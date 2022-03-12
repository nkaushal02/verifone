import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import helmet from "helmet";
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ApiDoc } from "./docs/doc";

async function bootstrap() {
  const context = "main.ts";
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // The test endpoint for documentation is exposed only on dev env. This is controlled by GSC.
  // !!! These CSP relaxations are only for endpoints exposing documentation. !!!
  // !!! They must never be applied to any other endpoint !!!
  app.use(
    "docs/v1",
    helmet({
      contentSecurityPolicy: {
        directives: {
          "img-src": ["'self'", "https://quizizz.com/favicon.ico"],
          "font-src": [
            "'self'",
            "https://fonts.googleapis.com https://fonts.gstatic.com",
            "'unsafe-inline'",
            "data:"
          ],
          "script-src": [
            "'self'",
            "https://apis.google.com",
            "https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js",
            "'unsafe-inline'"
          ],
          "default-src": ["'self'"],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js",
            "https://fonts.googleapis.com"
          ],
          "worker-src": ["'self'", "blob:"]
        }
      }
    })
  );
  await ApiDoc(app);
  app.useGlobalPipes(new ValidationPipe({whitelist: true,transform:true}));  
  await app.listen(8080);
}

bootstrap();

