import React, {
  useState,
  useContext,
} from 'react';
import styled from 'styled-components';
import { getBrowser } from '@finnoconsult/core-view';
import get from 'lodash.get';
import Draggable from 'react-draggable';

import StoreContext from '../../stores';
import {
  View, FlexView, Icon, ButtonStyles, Text,
} from '../ui';

const DevToolsSection = styled(FlexView).attrs(() => ({ as: 'section' }))`
  flex-direction: column;
  &, & > * {
    font-size: 1.6rem;
  }
`;
const ToggleButton = styled(ButtonStyles)`
  display: inline !important;
`;
interface DevToolsProps {
  open: boolean;
}
const DevToolsStyle = styled(View)<DevToolsProps>`
  position: fixed;
  right: 10px;
  top: 120px;
  z-index: 999;
  border: solid 1px orange;
  border-radius: 10px;
  padding: 4px;

  > * {
    display: none;
  }

  ${props => props.open && `
    background-color: rgba(255,255,255,0.8);
    padding: 14px;

    ${ToggleButton} + h1{
      font-size: 2.4rem;
      float: right;
      clear: right;
      display: inline-block;
    }
    & > * {
      display: inherit;
    }
  `}
`;

export default () => {
  const {
    NODE_ENV,
    REACT_APP_VERSION: version,
    REACT_APP_ID: name,
  } = process.env;

  if (NODE_ENV === 'production') return <></>;

  const stores = useContext(StoreContext);
  const [open, setOpen] = useState(false);

  return (
    <Draggable>
      <DevToolsStyle open={open} id="dev">
        <ToggleButton id="devtool-toggle" onClick={() => setOpen(!open)}>
          <Icon name="gear" color="#ffa500" />
        </ToggleButton>
        <h1>DevTools</h1>
        <DevToolsSection id="info">
          <summary>
            {name}
            {' v'}
            {version}
          </summary>
          <Text>
            Platform:
            {get(getBrowser(), 'name')}
            {' v'}
            {get(getBrowser(), 'version', '').replace(/\..*/gi, '')}
            {' @'}
            {get(getBrowser(), 'os.family')}
            {' v'}
            {get(getBrowser(), 'os.version')}
          </Text>
          <Text>
            Resolution:
            {' '}
            {stores.ui.resolution.width}
            x
            {stores.ui.resolution.height}
            {', '}
            {stores.ui.isMobile && 'isMobile, '}
            {stores.ui.isTablet && 'isTablet, '}
            {stores.ui.isDesktop && 'isDesktop, '}
            {stores.ui.isPortrait && 'isPortrait, '}
            {stores.ui.isLandscape && 'isLandscape, '}
          </Text>
        </DevToolsSection>
      </DevToolsStyle>
    </Draggable>
  );
};
