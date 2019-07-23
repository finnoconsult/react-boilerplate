import React from 'react';

import { Dimensions } from '../../types/Dimensions.d';
import { Browser } from '../../types/Browser.d';

import LayoutStyle from './LayoutStyle';

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
    data-layout-desktop={resolution.isDesktop}
    data-layout-tablet={resolution.isTablet}
    data-layout-phone={resolution.isPhone}
    data-layout-mobile={resolution.isMobile}
    data-platform-name={browser.name.toLowerCase()}
    data-platform-version={browser.version}
    data-platform-os-family={browser.os.family.toLowerCase()}
    data-platform-os-version={browser.os.version}
    {...resolution}
    browser={browser}
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
