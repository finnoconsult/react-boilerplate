import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

// import LandingPage from './pages/Landing';
// import AddressPage from './pages/Address';
// import AddressSMSPage from './pages/AddressSMS';
import AddressDone from './pages/AddressDone';
// import SMS1 from './pages/sms/SMS1';

export default () => (
  <ThemeProvider theme={theme}>
    {/* <LandingPage /> */}
    {/* <AddressPage /> */}
    {/* <AddressSMSPage /> */}
    <AddressDone />
    {/* <SMS1 /> */}
  </ThemeProvider>
);
