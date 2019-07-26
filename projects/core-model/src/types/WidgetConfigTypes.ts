import { ImageOrComponent, OneComponentDefinitionType } from "..";

// TODO: refactor types to the core-model


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
  images?: {
    'small'?: ImageOrComponent;
    'medium'?: ImageOrComponent;
    'large'?: ImageOrComponent;
  }
}
export interface WidgetComponentType extends WidgetDefinitionType {
  component?: OneComponentDefinitionType;
  wrapperComponent?: OneComponentDefinitionType | undefined | null;
}
export interface WidgetAllDefinitionType extends WidgetStaticType, WidgetComponentType {

}

/* matching for widget searcgh factory */
export interface WidgetMatchPlatformType {
  platform?: string;
}

// TODO: string?
export interface WidgetMatchRouteType {
  routes?: RegExp[];
  excludedRoutes?: RegExp[];
}

export interface WidgetMatchType extends WidgetMatchPlatformType, WidgetMatchRouteType {

}

export interface StandaloneWidgetConfigType {
  position?: string;
  order?: number | string;
  column?: number | string;
  row?: number | string;
  area?: number | string;
  size?: 'small' | 'medium' | 'large';

}
export interface ListWidgetConfigType {
  x?: number;
  y?: number;
}

export interface WidgetConfigType extends WidgetIdType, WidgetMatchType, StandaloneWidgetConfigType, ListWidgetConfigType {
}

export interface WidgetType extends WidgetAllDefinitionType, WidgetConfigType {

}
