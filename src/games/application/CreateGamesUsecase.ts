import { Game } from "../domain/game";
import { GameRepository } from "../domain/GameRepository";

export class CreateGamesUsecase {
  constructor(readonly gameRepository: GameRepository) {}

  async run(game: Game) {
    const createGames = await this.gameRepository.createGames(game);
    return createGames;
  }
}
