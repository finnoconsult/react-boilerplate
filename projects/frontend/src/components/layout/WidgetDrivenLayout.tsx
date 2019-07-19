import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { Layout, WidgetLayoutBuilder } from '@finnoconsult/core-view';

import MainPageContainer from './MainPageContainer';
import StoreContext from '../../stores';


export const WidgetDrivenLayout = observer(() => {
  const stores = useContext(StoreContext);

  return (
    <WidgetLayoutBuilder
      layout={Layout}
      widgets={stores.ui.mobileWidgetList}
    >
      <MainPageContainer />
    </WidgetLayoutBuilder>
  );
});

export default WidgetDrivenLayout;
