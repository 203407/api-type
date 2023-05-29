import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { config } from "./config";
import { gameRouter } from "./games/infraestructure/game-router";
import { healthRouter } from "./health/health-router";

function boostrap() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/health", healthRouter);
  app.use("/", gameRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
