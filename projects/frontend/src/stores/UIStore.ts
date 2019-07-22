import {
  computed, observable, action,
} from 'mobx';
import {
  isDesktop,
  isTablet,
  isPhone,
  getResolution,
} from '@finnoconsult/core-view';

import {
  widgets,
  WidgetType,
} from '../content';

import themes from '../theme/themeConfig';

// TODO: import from core-view
type Dimensions = ClientRect;

export default class UIStore {
  public constructor() {
    window.addEventListener('resize', () => this.setDefaultResolution());
  }

  @observable public resolution = getResolution();

  @action public setDefaultResolution() {
    this.setResolution(getResolution());
  }

  @action public setResolution(resolution: Dimensions): void {
    const res = resolution || {};
    this.resolution = {
      ...res,
      width: res.width,
      height: res.height,
    };
  }

  @observable private themeConfig = themes;

  @observable private theme = undefined;

  @computed public get isDesktop() {
    return isDesktop({
      ...this.themeConfig.devices,
      size: this.resolution,
    });
  }

  @computed public get isTablet() {
    return isTablet({
      ...this.themeConfig.devices,
      size: this.resolution,
    });
  }

  @computed public get isPhone() {
    return isPhone({
      ...this.themeConfig.devices,
      size: this.resolution,
    });
  }

  @computed public get isMobile() {
    return this.isTablet || this.isPhone;
  }

  @computed public get currentTheme() {
    return {
      ...this.themeConfig,
      ...((this.theme && this.themeConfig.all[this.theme || 'main']) || {}),
      isDesktop: this.isDesktop,
      isTablet: this.isTablet,
      isPhone: this.isPhone,
      isMobile: this.isMobile,
    };
  }

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
