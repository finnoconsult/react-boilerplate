import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

// import LandingPage from './pages/Landing';
// import AddressPage from './pages/Address';
import AddressSMSPage from './pages/AddressSMS';
// import SMS1 from './pages/sms/SMS1';

export default () => (
  <ThemeProvider theme={theme}>
    {/* <LandingPage /> */}
    {/* <AddressPage /> */}
    <AddressSMSPage />
    {/* <SMS1 /> */}
  </ThemeProvider>
);
