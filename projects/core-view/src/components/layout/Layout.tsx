import React from 'react';

import LayoutStyle from './LayoutStyle';

export interface LayoutProps {
  children?: JSX.Element[] | JSX.Element | string;
  nav?: () => JSX.Element;
  header?: () => JSX.Element;
  left?: () => JSX.Element;
  right?: () => JSX.Element;
  footer?: () => JSX.Element;
}

const Layout = ({
  header: Header,
  nav: Nav,
  left: LeftSide,
  right: RightSide,
  children,
  footer: Footer,
}: LayoutProps) => (
  <LayoutStyle>
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
