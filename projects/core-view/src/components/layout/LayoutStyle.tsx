import styled from 'styled-components';

import Fragment, { FragmentProps } from './Fragment';

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
    flex: 1 1 auto;
    place-content: center;
    border: solid 1px black;
  }

  > header,
  > nav {
    grid-area: header;
  }
  > main {
    grid-area: main;
  }
  > footer {
    grid-area: footer;
  }
  > aside.left,
  > aside.right {
    display: none;
  }
`;
MobileLayoutStyle.displayName='LayoutStyle';

// TODO: DesktopLayoutStyle

export default MobileLayoutStyle;
