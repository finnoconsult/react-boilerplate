import {
  WidgetStaticType,
  WidgetComponentType,
  StandaloneWidgetConfigType,
  ListWidgetConfigType,
  WidgetConfigType,
} from '@finnoconsult/core-model';

import HeaderContainer from '../components/layout/HeaderContainer';
import LogoContainer from '../components/layout/LogoContainer';
import NavBarContainer from '../components/layout/NavBarContainer';
import LeftContainer from '../components/layout/LeftContainer';
import FooterContainer from '../components/layout/FooterContainer';
// import MainPageContainer from './MainPageContainer';

export const widgetDefinitions: (WidgetStaticType[] | WidgetComponentType[]) = [
  // TODO: should be better with object id=key mapping
  {
    id: 'mobileNavBar', title: 'mobileNavBar', component: NavBarContainer,
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
];

export const widgetConfigs: (StandaloneWidgetConfigType[] | ListWidgetConfigType[]) = [
  {
    id: 'mobileNavBar', platform: 'mobile', position: 'nav', order: 2,
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
];


export const widgets: WidgetConfigType[] = widgetConfigs.map(w => ({ ...w, ...(widgetDefinitions.find(d => d.id === w.id) || {}) }));
