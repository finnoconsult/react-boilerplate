import React from 'react';

import { Layout } from '@finnoconsult/core-view';
import {
  HeaderContainer,
  NavBarContainer,
  LeftContainer,
  FooterContainer,
  MainPageContainer,
} from './components/layout';


const App = () => (
  <Layout
    header={() => <HeaderContainer />}
    nav={() => <NavBarContainer />}
    left={() => <LeftContainer />}
    footer={() => <FooterContainer />}
  >
    <MainPageContainer />
  </Layout>
);

export default App;
