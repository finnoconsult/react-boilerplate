import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import { Layout, WidgetLayoutBuilder } from '@finnoconsult/core-view';

import MainPageContainer from './MainPageContainer';
import StoreContext from '../../stores';

import themes from '../../theme/themeConfig';

export const WidgetDrivenLayout = observer(() => {
  const stores = useContext(StoreContext);

  return (
    <ThemeProvider theme={themes}>
      <WidgetLayoutBuilder
        layout={Layout}
        widgets={stores.ui.mobileWidgetList}
      >
        <MainPageContainer />
      </WidgetLayoutBuilder>
    </ThemeProvider>
  );
});

export default WidgetDrivenLayout;
