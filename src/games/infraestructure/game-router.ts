import express from "express";

import {
  createGameController,
  getGameByIdController,
  getListGamesController,
} from "./dependencies";

const gameRouter = express.Router();

gameRouter.get(
  "/games",
  getListGamesController.run.bind(getListGamesController)
);
gameRouter.post(
  "/games/create",
  createGameController.run.bind(createGameController)
);
gameRouter.post(
  "/games/:id",
  getGameByIdController.run.bind(getGameByIdController)
);

export { gameRouter };
