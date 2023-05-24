import { Request, Response } from "express";

import { GetListGamesUsecase } from "../../application/GetListGamesUsecase";

export class GetListGamesController {
  constructor(readonly getListGamesUsecase: GetListGamesUsecase) {}

  async run(req: Request, res: Response) {
    try {
      const gamesList = await this.getListGamesUsecase.run();
      res.status(200).json(gamesList);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
