import styled from 'styled-components';

import { Fragment, FragmentProps } from '../Fragment';

const MobileLayoutStyle = styled(Fragment)<FragmentProps>`
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
`;
MobileLayoutStyle.displayName='LayoutStyle';

// TODO: DesktopLayoutStyle

export default MobileLayoutStyle;
