import React from 'react';
import { Security } from '@finnoconsult/core-view';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  // HeaderContainer,
  // NavBarContainer,
  // LeftContainer,
  // FooterContainer,
  // MainPageContainer,
  WidgetDrivenLayout,
} from './components/layout';


const App = () => (
  <Security>
    <Router>
      {/* <Layout
        header={() => <HeaderContainer />}
        nav={() => <NavBarContainer />}
        left={() => <LeftContainer />}
        footer={() => <FooterContainer />}
      >
        <MainPageContainer />
      </Layout> */}
      <WidgetDrivenLayout />
    </Router>
  </Security>
);

export default App;
