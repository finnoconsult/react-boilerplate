import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from './theme';

import Button from './components/Button';
import TextField from './components/TextField';

const PlaygroundLayout = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  width: 340px;
  &>* {
    margin: 12px 0;
  }
`;

export default () => (
  <ThemeProvider theme={theme}>
    <PlaygroundLayout>
      <Button cta title="Click me!" />
      <TextField placeholder="Type here!" badgeTitle="Title" utilityView={<p>Utility</p>} />
    </PlaygroundLayout>
  </ThemeProvider>
);
