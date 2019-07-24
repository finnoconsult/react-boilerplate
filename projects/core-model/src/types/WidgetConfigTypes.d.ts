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
  small?: ImageOrComponent;
  medium?: ImageOrComponent;
  large?: ImageOrComponent;
}
export interface WidgetComponentType extends WidgetDefinitionType {
  component: () => JSX.Element | JSX.Element;
}


export interface WidgetPlatformType extends WidgetIdType {
  platform?: string;
}

export interface StandaloneWidgetConfigType extends WidgetPlatformType {
  position?: string;
  order?: number | string;
  column?: number | string;
  row?: number | string;
  area?: number | string;

}
export interface ListWidgetConfigType extends WidgetPlatformType {
  x: number;
  y: number;
  size: string;
}

export interface WidgetConfigType extends WidgetStaticType, WidgetComponentType, StandaloneWidgetConfigType, ListWidgetConfigType {

}
