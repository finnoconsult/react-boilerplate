// TODO: refactor types to the core-model

import { ImageOrComponent } from '@finnoconsult/core-view';

export interface WidgetIdType {
  id: string | number;
}
export interface WidgetDefinitionType extends WidgetIdType {
  title?: string;
  description?: string;
  sizes?: {
    small: number[];
    medium: number[];
    large: number[];
  };
  link?: string;
  group?: string;
}
export interface WidgetStaticType extends WidgetDefinitionType {
  images: {
    small?: ImageOrComponent;
    medium?: ImageOrComponent;
    large?: ImageOrComponent;
  }
}
export interface WidgetComponentType extends WidgetDefinitionType {
  component: () => JSX.Element | JSX.Element;
}


export interface WidgetMatchPlatformType extends WidgetIdType {
  platform?: string;
}

// TODO: add regex support
export interface WidgetMatchRouteType extends WidgetIdType {
  routes?: string[];
  excludedRoutes?: string[];
}

export interface WidgetMatchType extends WidgetMatchPlatformType, WidgetMatchRouteType {

}

export interface StandaloneWidgetConfigType extends WidgetMatchType {
  position?: string;
  order?: number | string;
  column?: number | string;
  row?: number | string;
  area?: number | string;
  size: string;

}
export interface ListWidgetConfigType extends WidgetMatchType {
  x: number;
  y: number;
}

export interface WidgetConfigType extends WidgetStaticType, WidgetComponentType, StandaloneWidgetConfigType, ListWidgetConfigType {

}
