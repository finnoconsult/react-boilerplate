import {
  computed, observable, action,
} from 'mobx';

import {
  widgets,
  WidgetType,
} from '../content';

export default class UIStore {
  @observable private widgets = widgets;

  @computed public get widgetList(): WidgetType[] {
    return this.widgets;
  }

  @computed public get mobileWidgetList(): WidgetType[] {
    return this.widgets.filter(widget => (widget.platform || '').match(/^(.*mobile.*|.*\*.*|)$/gi));
  }

  @observable private games: string[] = [];

  @computed public get allGames(): string[] {
    return this.games;
  }

  @action public addGame(game: string): void {
    if (game) this.games.push(game);
  }
}
