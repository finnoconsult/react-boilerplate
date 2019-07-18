import React from 'react';

import LayoutStyle from './LayoutStyle';

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  nav?: () => JSX.Element;
  header?: () => JSX.Element;
  left?: () => JSX.Element | string;
  right?: () => JSX.Element | string;
  footer?: () => JSX.Element;
}

const Layout = ({
  header: Header,
  nav: Nav,
  left: LeftSide,
  right: RightSide,
  children,
  footer: Footer,
}: Props) => (
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
