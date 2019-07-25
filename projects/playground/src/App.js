import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

// import LandingPage from './pages/Landing';
// import AddressPage from './pages/Address';
// import AddressSMSPage from './pages/AddressSMS';
// import AddressDone from './pages/AddressDone';
// import Progress from './pages/Progress';
import HelpOnTheWay from './pages/HelpOnTheWay';

export default () => (
  <ThemeProvider theme={theme}>
    {/* <LandingPage /> */}
    {/* <AddressPage /> */}
    {/* <AddressSMSPage /> */}
    {/* <AddressDone /> */}
    {/* <Progress /> */}
    <HelpOnTheWay />
  </ThemeProvider>
);
