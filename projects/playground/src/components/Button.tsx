import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../theme';

const ButtonStyles = styled.button`
  background-color: ${props => props.theme.color.cta}
  border: none;
  border-radius: 4px;
  font-size: ${props => props.theme.font.sizeButton}
`;

export default function Button() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyles>Click me!</ButtonStyles>
    </ThemeProvider>
  );
}
