import React, { useContext } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';

import { FlexView, useLocation } from '@finnoconsult/core-view';

import StoreContext from '../../stores';

import RateUs from '../overlays/RateUs';
import ThankYou from '../overlays/ThankYou';
import ComingSoon from '../overlays/ComingSoon';

interface DialogType {
  open?: boolean;
  center?: boolean;
}

const DialogContentStyle = styled(FlexView)<DialogType>`
  background-color: ${props => props.theme.colors.background};
  min-height: 30vh;
  flex: 0 0 auto;
  width: 100%;
`;


const DialogStyle = styled(FlexView).attrs(() => ({ as: 'dialog' })) <DialogType>`
  position: fixed;
  border: none;
  background: none;
  background: transparent;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;

  &[open] {
    display: flex;
    background: ${props => props.theme.colors.overlay};
    height: 100vh;
    z-index: 99;
  }
  &, &[open="false"] {
    display: none;
    z-index: 1;
  }
`;
DialogStyle.displayName = 'DialogStyle';


export default observer(() => {
  const stores = useContext(StoreContext);

  function dismiss() {
    stores.ui.setShowOverlay(false);
  }

  const location = useLocation();
  const isComingSoon = location.search.match(/[?&]coming-soon(\/|&|$)/gi) !== null;

  // TODO: implement CustomSwitch to check if there is any children or not.
  const RouteSwitcher = () => (
    <Switch>
      <Route
        path="/documents/rateus"
        render={() => (
          <DialogContentStyle column center>
            <RateUs
              onCloseClicked={dismiss}
              smileyLink="/documents/thankyou"
            />
          </DialogContentStyle>
        )}
      />
      <Route
        path="/documents/thankyou"
        render={() => (
          <DialogContentStyle column center>
            <ThankYou
              onCloseClicked={dismiss}
            />
          </DialogContentStyle>
        )}
      />
      {/* <Route render={() => (
        <DialogContentStyle column center>
          <h1>Defalt route</h1>
          <h2>TODO:</h2>
          <p>implement and add routers here</p>
          <p>{'open=\'true\' will display overlay'}</p>
          <p>{'end=\'true\' can locate the content to bottom'}</p>
        </DialogContentStyle>
      )}
      /> */}
    </Switch>
  );

  const renderedSwitch = <RouteSwitcher />;
  const open = isComingSoon || stores.ui.showOverlay;
  // console.log('renderedSwitch', stores.ui.showOverlay, renderedSwitch, <ComingSoon />, <ComingSoon /> !== null);

  return (
    <DialogStyle open={open} end="true">
      {stores.ui.showOverlay && (
        renderedSwitch
      )}
      {isComingSoon && <Route component={ComingSoon} />}
    </DialogStyle>
  );
});
