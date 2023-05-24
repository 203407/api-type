import { Request, Response } from "express";

import { GetGameByIdUsecase } from "../../application/GetGameByIdUsecase";

export class GetGameByIdController {
  constructor(readonly getGameByIdUsecase: GetGameByIdUsecase) {}

  async run(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const gameData = await this.getGameByIdUsecase.run(id);
      res.status(200).json(gameData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
