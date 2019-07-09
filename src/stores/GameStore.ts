import {
  computed, observable, action,
} from 'mobx';

export default class GameStore {
  @observable private games: string[] = []

  @computed public get allGames(): string[] {
    return this.games;
  }

  @action public addGame(game: string): void {
    this.games.push(game);
  }
}
