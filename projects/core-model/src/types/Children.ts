// ReactChild | ReactFragment | ReactPortal | 
export type Children = boolean | null | undefined | JSX.Element[] | JSX.Element | string;

export type ChildrenOrComponent = (() => JSX.Element) | ((props: any, state: any) => JSX.Element) | JSX.Element | string | undefined | null;

export type ImageOrComponent = ChildrenOrComponent;
