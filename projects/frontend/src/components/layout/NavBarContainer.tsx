import React from 'react';

import { StaticMenuList } from '@finnoconsult/core-view';
import { links } from '../../content/index';

export default function NavBarContainer() {
  return <StaticMenuList items={links.nav} />;
}
