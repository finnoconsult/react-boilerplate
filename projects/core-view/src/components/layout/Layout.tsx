import React from 'react';
import get from 'lodash.get';

import { Dimensions, Browser, Children } from '../../types';

import LayoutStyle from './LayoutStyle';

export interface LayoutProps {
  children?: Children;
  nav?: () => JSX.Element;
  header?: () => JSX.Element;
  left?: () => JSX.Element;
  right?: () => JSX.Element;
  footer?: () => JSX.Element;
  main?: () => JSX.Element;
  resolution?: Dimensions;
  browser: Browser;
}

export const Layout = ({
  header: Header,
  nav: Nav,
  left: LeftSide,
  right: RightSide,
  children,
  footer: Footer,
  main: Main,
  resolution,
  browser,
}: LayoutProps) => (
  <LayoutStyle
    data-layout={(get(resolution, 'isPortrait', false)) ? 'portrait' : 'landscape'}
    data-layout-desktop={get(resolution, 'isDesktop')}
    data-layout-tablet={get(resolution, 'isTablet')}
    data-layout-phone={get(resolution, 'isPhone')}
    data-layout-mobile={get(resolution, 'isMobile')}
    data-platform-name={get(browser, 'name', '').toLowerCase()}
    data-platform-version={get(browser, 'version')}
    data-platform-os-family={get(browser, 'os.family', '').toLowerCase()}
    data-platform-os-version={get(browser, 'os.version')}
    {...resolution}
    browser={browser}
  >
    {Header && <header><Header /></header>}
    {Nav && <nav><Nav /></nav>}
    {LeftSide && <aside className="left"><LeftSide /></aside>}
    {RightSide && <aside className="right"><RightSide /></aside>}
    <main>
      {Main && <Main />}
      {children}
    </main>
    {Footer && <footer><Footer /></footer>}
  </LayoutStyle>
);

export default Layout;
