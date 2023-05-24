import { Game } from "./game";

export interface GameRepository {
  getListGames(): Promise<Game[] | null>;
  createGames(game: Game): Promise<Game | null>;
  getGameById(id: string): Promise<Game | null>;
}
