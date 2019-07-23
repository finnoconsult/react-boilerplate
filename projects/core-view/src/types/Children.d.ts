export type Children = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined | JSX.Element[] | JSX.Element | string;

export type ChildrenOrComponent = (() => JSX.Element) | JSX.Element | string;

export type ImageOrComponent = ChildrenOrComponent;
