import express from "express";

import {
  createGameController,
  getGameByIdController,
  getListGamesController,
} from "./dependencies";

const gameRouter = express.Router();

gameRouter.get("/", getListGamesController.run.bind(getListGamesController));
gameRouter.post("/create", createGameController.run.bind(createGameController));
gameRouter.post("/:id", getGameByIdController.run.bind(getGameByIdController));

export { gameRouter };
