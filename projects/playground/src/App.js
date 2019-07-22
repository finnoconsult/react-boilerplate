import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

// import Button from './components/Button';
// import TextField from './components/TextField';
// import TableView from './components/TableView';

import AddressPage from './pages/Address';

// const PlaygroundLayout = styled.div`
//   margin: 12px;
//   display: flex;
//   flex-direction: column;
//   width: 340px;
//   &>* {
//     margin: 12px 0;
//   }
// `;

export default () => (
  <ThemeProvider theme={theme}>
    {/* <PlaygroundLayout>
      <Button cta title="Click me!" />
      <TextField placeholder="Type here!" badgeTitle="Title" utilityView={<p>Utility</p>} />
      <TableView
        cellItems={[
          { title: 'hello', description: 'bello' },
          { title: 'hi', description: 'ho' },
        ]}
        title="Table"
        onlyOneCellShouldOpen
      />
    </PlaygroundLayout> */}
    <AddressPage />
  </ThemeProvider>
);
