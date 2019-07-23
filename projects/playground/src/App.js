import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

import AddressPage from './pages/Address';
// import LandingPage from './pages/Landing';
// import SMS1 from './pages/sms/SMS1';

export default () => (
  <ThemeProvider theme={theme}>
    <AddressPage />
    {/* <LandingPage /> */}
    {/* <SMS1 /> */}
  </ThemeProvider>
);
