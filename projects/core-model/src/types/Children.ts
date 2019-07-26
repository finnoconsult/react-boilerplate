type TextComponent = string;
type EmptyComponent = null | undefined;

// ReactChild | ReactFragment | ReactPortal |
export type ComponentType = JSX.Element;
export type MultipleComponentType = JSX.Element[];

export type OneComponentDefinitionType = (() => JSX.Element) | ((props: any, state: any) => JSX.Element);
export type MultipleComponentDefinitionType = (() => JSX.Element)[] | ((props: any, state: any) => JSX.Element)[];


export type ComponentDefinitionType = MultipleComponentDefinitionType
  | OneComponentDefinitionType
  // | TextComponent
  | EmptyComponent;

export type Children = MultipleComponentType
  | ComponentType
  | TextComponent
  | EmptyComponent
  | boolean;


export type ChildrenOrComponent = OneComponentDefinitionType
  | ComponentType
  | TextComponent
  | EmptyComponent;

export type ImageOrComponent = ChildrenOrComponent;