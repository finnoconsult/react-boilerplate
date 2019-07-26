import styled from 'styled-components';

import { Fragment, FragmentProps } from '../Fragment';
import { Dimensions, Browser, PlatformProps } from '../../types';
import Page from './Page';

interface LayoutStyleProps extends FragmentProps, PlatformProps {
  browser?: Browser;
}

const MobileLayoutStyle = styled(Fragment)<LayoutStyleProps | Dimensions>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 0px;
  grid-template-areas:  "header"
                        "main"
                        "footer";
  width: 100%;
  height: 100%;
  max-height: 100vh;

  place-content: center;

  > * {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    z-index: 90;
  }
  /* mobile header navigation */
  > nav,
  > footer,
  > header {
    z-index: 92;
  }
  > aside {
    z-index: 91;
  }
  > nav {
    grid-area: header;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    z-index: 91;

    background-color: ${props => props.theme.colors.cta}
  }
  > main {
    grid-area: main;
    overflow: hidden;
    position: relative;

    ${Page} {
      height: 100%;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }
  }
  > footer {
    display: none;
    grid-area: footer;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }
  /* desktop header navigation */
  > header {

  }
  > header,
  > aside.left,
  > aside.right {
    display: none;
  }

  > dialog {
  }

  /* ${props => (props.theme.isMobile || props.isMobile) && `
  `}
  ${props => (props.theme.isPhone || props.isPhone) && `
  `}
  ${props => (props.theme.isTablet || props.isTablet) && `
  `}
  ${props => (props.theme.isDesktop || props.isDesktop) && `
  `}
  */

  ${props => props.isLandscape && `

    &:after {
      position: fixed;
      z-index: 999999;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      box-sizing: border-box;

      display: flex;
      align-items: center;
      justify-content: center;

      content: 'Please rotate your device to Landscape mode!';
      background-color: rgba(60,60,60,0.7);
      border: double 5px ${props.theme.colors.info};
      color: ${props.theme.colors.info};
      opacity: 0.9;
    }

  `}
`;
MobileLayoutStyle.displayName='LayoutStyle';

// TODO: DesktopLayoutStyle

export default MobileLayoutStyle;
