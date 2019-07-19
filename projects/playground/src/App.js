import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

import Button from './components/Button';

export default () => (
  <ThemeProvider theme={theme}>
    <Button cta title="Click me!" />
  </ThemeProvider>
);
