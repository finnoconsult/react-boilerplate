import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import { Layout, WidgetLayoutBuilder, browser } from '@finnoconsult/core-view';

// import MainPageContainer from './MainPageContainer';
import StoreContext from '../../stores';
import MainPageContainer from './MainPageContainer';

export const WidgetDrivenLayout = observer(() => {
  const stores = useContext(StoreContext);

  return (
    <ThemeProvider theme={stores.ui.currentTheme}>
      <WidgetLayoutBuilder
        layout={Layout}
        widgets={stores.ui.mobileWidgetList}
        resolution={stores.ui.resolution}
        browser={browser}
      >
        <MainPageContainer />
      </WidgetLayoutBuilder>
    </ThemeProvider>
  );
});

export default WidgetDrivenLayout;
