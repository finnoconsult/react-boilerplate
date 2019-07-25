import React from 'react';
import {
  // WidgetStaticType,
  // WidgetComponentType,
  // StandaloneWidgetConfigType,
  // ListWidgetConfigType,
  WidgetAllDefinitionType,
  WidgetConfigType,
} from '@finnoconsult/core-model';

import HeaderContainer from '../components/layout/HeaderContainer';
import LogoContainer from '../components/layout/LogoContainer';
import NavBarContainer from '../components/layout/NavBarContainer';
import LeftContainer from '../components/layout/LeftContainer';
import FooterContainer from '../components/layout/FooterContainer';
import Icon from '../components/ui/Icon';
// import MainPageContainer from './MainPageContainer';

export const widgetDefinitions: (WidgetAllDefinitionType)[] = [
  // TODO: should be better with object id=key mapping
  {
    id: 'mobileNavBar', title: 'mobileNavBar', component: NavBarContainer,
  },
  {
    id: 'mobileNavBarStatic', title: 'mobileNavBar', images: {
      medium: <Icon name="close" />
    },
  },
  {
    id: 'logo', title: 'logo', component: LogoContainer,
  },
  {
    id: 'mobileTabBar', title: 'mobileTabBar', component: FooterContainer,
  },
  {
    id: 'desktopMenuBar', title: 'desktopMenuBar', component: HeaderContainer,
  },
  {
    id: 'desktopContentMenu', title: 'desktopContentMenu', component: LeftContainer,
  },
  {
    id: 'SampleStaticImage', title: 'SampleStaticImage', images: {
      small: <Icon name="plane" />,
      medium: <Icon name="plane" round="100px" />,
      large: <Icon name="disks" size="100px" border="black" />,
    },
  },
];

export const widgetConfigs: (WidgetConfigType)[] = [
  {
    id: 'mobileNavBar', platform: 'mobile', position: 'nav', order: 2, excludedRoutes: [/^(|\/)$/]
  },
  {
    id: 'mobileNavBarStatic', platform: 'mobile', position: 'nav', order: 2, routes: [/^(|\/)$/]
  },
  {
    id: 'logo', platform: '*', position: 'nav', order: 1,
  },
  {
    id: 'mobileTabBar', position: 'footer',
  },
  {
    id: 'desktopMenuBar', platform: 'desktop', position: 'header',
  },
  {
    id: 'desktopContentMenu', platform: 'desktop', position: 'left',
  },
  {
    id: 'SampleStaticImage', position: 'footer', size: 'medium',
  },
];


export const widgets: WidgetConfigType[] = widgetConfigs.map(w => ({ ...w, ...(widgetDefinitions.find(d => d.id === w.id) || {}) }));
