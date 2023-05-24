import { GameRepository } from "../domain/GameRepository";

export class GetGameByIdUsecase {
  constructor(readonly gamesRepository: GameRepository) {}

  async run(id: string) {
    const game = await this.gamesRepository.getGameById(id);
    return game;
  }
}
