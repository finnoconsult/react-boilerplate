import React from 'react';

import { Layout } from '@finnoconsult/core-view';
import {
  HeaderContainer,
  NavigationContainer,
  LeftContainer,
  FooterContainer,
} from './components/layout';


const App = () => (
  <Layout
    header={() => <HeaderContainer />}
    nav={() => <NavigationContainer />}
    left={() => <LeftContainer />}
    footer={() => <FooterContainer />}
  >
    main
  </Layout>
);

export default App;
