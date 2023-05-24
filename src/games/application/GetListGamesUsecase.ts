import { GameRepository } from "../domain/GameRepository";

export class GetListGamesUsecase {
  constructor(readonly gamesRepository: GameRepository) {}

  async run() {
    const gamesList = await this.gamesRepository.getListGames();
    return gamesList;
  }
}
