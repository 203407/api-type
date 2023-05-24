import { Request, Response } from "express";

import { CreateGamesUsecase } from "../../application/CreateGamesUsecase";
import { Game } from "../../domain/game";

export class CreateGamesController {
  constructor(readonly createGameUseCase: CreateGamesUsecase) {}

  async run(req: Request, res: Response) {
    const game = req.body;
    try {
      const gameData = await this.createGameUseCase.run(
        new Game(game.id, game.titulo, game.estrellas, game.descri, game.imagen)
      );
      // console.log(gameData);
      res.status(200).json(gameData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
