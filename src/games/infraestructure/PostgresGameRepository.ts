import { pool } from "../../database";
import { Game } from "../domain/game";
import { GameRepository } from "../domain/GameRepository";

export class PostgresGameRepository implements GameRepository {
  async getGameById(id: string): Promise<Game | null> {
    const sql = "SELECT * FROM games where id = $1";
    const values = [id];
    try {
      const result = await pool.query(sql, values);
      if (result.rows.length > 0) {
        const createdGameData = result.rows[0];
        const createdGame: Game = {
          id: createdGameData.id,
          titulo: createdGameData.titulo,
          estrellas: createdGameData.estrellas,
          descri: createdGameData.descri,
          imagen: createdGameData.imagen,
        };
        return createdGame;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async getListGames(): Promise<Game[] | null> {
    const sql = "SELECT * FROM games";
    try {
      const result = await pool.query(sql);
      const games: Game[] = result.rows.map((gameData: any) => ({
        id: gameData.id,
        titulo: gameData.titulo,
        estrellas: gameData.estrellas,
        descri: gameData.descri,
        imagen: gameData.imagen,
      }));
      return games;
    } catch (error) {
      throw error;
    }
  }

  async createGames(game: Game): Promise<Game | null> {
    const sql =
      "INSERT INTO games (id,titulo, estrellas, descri,imagen) VALUES ($1, $2, $3, $4,$5) RETURNING *";
    const values = [
      game.id,
      game.titulo,
      game.estrellas,
      game.descri,
      game.imagen,
    ];
    try {
      const result = await pool.query(sql, values);
      if (result.rows.length > 0) {
        const createdGameData = result.rows[0];
        const createdGame: Game = {
          id: createdGameData.id,
          titulo: createdGameData.titulo,
          estrellas: createdGameData.estrellas,
          descri: createdGameData.descri,
          imagen: createdGameData.imagen,
        };
        return createdGame;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
