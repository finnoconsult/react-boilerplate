import styled from 'styled-components';

import { Fragment, FragmentProps } from '../Fragment';
import { Dimensions, Browser } from '../../types';

interface LayoutStyleProps extends FragmentProps{
  browser?: Browser;
}

const MobileLayoutStyle = styled(Fragment)<LayoutStyleProps | Dimensions>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas:  "header"
                        "main"
                        "footer";
  width: 100%;
  height: 100%;
  place-content: center;
  place-self: center;

  > * {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    // place-content: center;
  }

  > nav {
    grid-area: header;
    // display: flex;
    flex-direction: row;
  }
  > main {
    grid-area: main;
  }
  > footer {
    grid-area: footer;
  }
  > header,
  > aside.left,
  > aside.right {
    display: none;
  }

  ${props => props.isMobile && `
  `}
  ${props => props.isPhone && `
  `}
  ${props => props.isTablet && `
  `}
  ${props => props.isDesktop && `
  `}

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
