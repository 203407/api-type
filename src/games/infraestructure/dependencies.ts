import { CreateGamesUsecase } from "../application/CreateGamesUsecase";
import { GetGameByIdUsecase } from "../application/GetGameByIdUsecase";
import { GetListGamesUsecase } from "../application/GetListGamesUsecase";
import { CreateGamesController } from "./controllers/CreateGamesController";
import { GetGameByIdController } from "./controllers/GetGameByIdController";
import { GetListGamesController } from "./controllers/GetListGamesController";
import { PostgresGameRepository } from "./PostgresGameRepository";

const postgresGamesRepository = new PostgresGameRepository();

export const listGamesUseCase = new GetListGamesUsecase(
  postgresGamesRepository
);
export const getListGamesController = new GetListGamesController(
  listGamesUseCase
);

export const createGameUseCase = new CreateGamesUsecase(
  postgresGamesRepository
);
export const createGameController = new CreateGamesController(
  createGameUseCase
);

export const getGameByIdUsecase = new GetGameByIdUsecase(
  postgresGamesRepository
);
export const getGameByIdController = new GetGameByIdController(
  getGameByIdUsecase
);
