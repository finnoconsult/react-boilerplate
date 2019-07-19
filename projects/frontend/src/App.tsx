import React from 'react';
import { Layout } from '@finnoconsult/core-view';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  HeaderContainer,
  NavBarContainer,
  LeftContainer,
  FooterContainer,
  MainPageContainer,
} from './components/layout';


const App = () => (
  <Router>
    <Layout
      header={() => <HeaderContainer />}
      nav={() => <NavBarContainer />}
      left={() => <LeftContainer />}
      footer={() => <FooterContainer />}
    >
      <MainPageContainer />
    </Layout>
  </Router>
);

export default App;
