import React from 'react';

import LayoutStyle from './LayoutStyle';

// TODO: import from core-view
export interface Dimensions extends ClientRect {
  isPortrait?: boolean;
}
export interface Browser {
  name?: string;
  version: string;
  os: string;
}
export interface LayoutProps {
  children?: JSX.Element[] | JSX.Element | string;
  nav?: () => JSX.Element;
  header?: () => JSX.Element;
  left?: () => JSX.Element;
  right?: () => JSX.Element;
  footer?: () => JSX.Element;
  resolution?: Dimensions;
  browser: Browser;
}

const Layout = ({
  header: Header,
  nav: Nav,
  left: LeftSide,
  right: RightSide,
  children,
  footer: Footer,
  resolution,
  browser,
}: LayoutProps) => (
  <LayoutStyle
    data-layout={resolution.isPortrait ? 'portrait' : 'landscape'}
    data-platform-name={browser.name}
    data-platform-version={browser.version}
    data-platform-os-family={browser.os.family}
    data-platform-os-version={browser.os.version}
  >
    {Header && <header><Header /></header>}
    {Nav && <nav><Nav /></nav>}
    {LeftSide && <aside className="left"><LeftSide /></aside>}
    {RightSide && <aside className="right"><RightSide /></aside>}
    <main>
      {children}
    </main>
    {Footer && <footer><Footer /></footer>}
  </LayoutStyle>
);

export default Layout;
