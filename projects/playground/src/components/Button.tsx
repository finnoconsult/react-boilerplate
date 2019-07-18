import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../theme';

const ButtonLayout = styled.button``;

export default function Button() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonLayout>Click me!</ButtonLayout>
    </ThemeProvider>
  );
}
