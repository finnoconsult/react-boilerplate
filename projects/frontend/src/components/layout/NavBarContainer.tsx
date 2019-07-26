import React from 'react';
import styled from 'styled-components';

import { StaticMenuList, View } from '@finnoconsult/core-view';
import { links } from '../../content/index';

const NavBarStyle = styled(View)`
`;

export default function NavBarContainer() {
  return (
    <NavBarStyle padding>
      <StaticMenuList items={links.nav} />
    </NavBarStyle>
  );
}
