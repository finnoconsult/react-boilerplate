import React from 'react';
import {
  // WidgetStaticType,
  // WidgetComponentType,
  // StandaloneWidgetConfigType,
  // ListWidgetConfigType,
  WidgetAllDefinitionType,
  WidgetConfigType,
} from '@finnoconsult/core-model';
// import { Link } from 'react-router-dom';

import HeaderContainer from '../components/layout/HeaderContainer';
// import LogoContainer from '../components/layout/LogoContainer';
import NavBarContainer from '../components/layout/NavBarContainer';
import LeftContainer from '../components/layout/LeftContainer';
import FooterContainer from '../components/layout/FooterContainer';
import {
  Icon, View,
  // Image,
} from '../components/ui';

import { ReactComponent as NavigationLanding } from '../components/static/mobile/layout/navigation-landing.svg';
import googleNavBar from '../images/google-search-navbar.png';

export const widgetDefinitions: (WidgetAllDefinitionType)[] = [
  // TODO: should be better with object id=key mapping
  {
    id: 'mobileNavBar', title: 'mobileNavBar', component: NavBarContainer,
  },
  {
    id: 'staticMobileNavBarGoogle', title: 'mobileNavBar', images: {
      medium: googleNavBar,
    },
  },
  {
    id: 'staticMobileNavBarLanding', title: 'mobileNavBar', images: {
      medium: <NavigationLanding />,
    },
  },
  {
    id: 'logoMobile', title: 'logo', images: {
      medium: <View padding><Icon name="adac" type="ico.logo" /></View>,
    },
  },
  {
    id: 'logo2Mobile', images: {
      medium: <View><Icon name="open-house" type="ico.logo" /></View>,
    },
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
    id: 'staticMobileNavBarGoogle', platform: 'mobile', position: 'nav', order: 2, routes: [/^(|\/)$/],
  },
  {
    id: 'staticMobileNavBarLanding', platform: 'mobile', position: 'nav', order: 2, routes: [/^\/landing$/],
  },
  {
    id: 'mobileNavBar', platform: 'mobile', position: 'nav', order: 3, excludedRoutes: [/^(|\/|\/landing)$/],
  },
  {
    id: 'logoMobile', platform: '*', position: 'nav', order: 1, excludedRoutes: [/^(|\/|\/landing)$/],
  },
  {
    id: 'logo2Mobile', platform: '*', position: 'nav', order: 2, excludedRoutes: [/^(|\/|\/landing)$/],
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
