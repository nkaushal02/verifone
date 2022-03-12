import { Logger } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { ProductsModule } from "../products/products.module";
import { AuthModule } from "../auth/auth.module";

import { RedocModule, RedocOptions } from "nestjs-redoc";
import { apiDescription, apiTitle, xTagGroups } from "./constants";

/* istanbul ignore file */
const setup = async (
  app,
  moduleToIncludes,
  apiDocsPath,
  extraXTagGroups = [],
  version = "1.0.0"
) => {
  const options = new DocumentBuilder()
    .setVersion(version)
    .setTitle(apiTitle)
    .setDescription(apiDescription)
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [ProductsModule, AuthModule, ...moduleToIncludes]
  });
  document["x-tagGroups"] = [...extraXTagGroups, ...xTagGroups];

  const redocOptions: RedocOptions = {
    title: apiTitle,
    sortPropsAlphabetically: true,
    hideHostname: false,
    noAutoAuth: false,
    showExtensions: true,
    nativeScrollbars: true
  };

  await RedocModule.setup(apiDocsPath, app, document, redocOptions);

  Logger.log(`API Docs ${apiDocsPath}`, "doc.ts");

  return document;
};

export const ApiDoc = async app => {
  // Setup API v1 docs
  await setup(app, [], "/docs/v1", [], "1.0.0");
};
