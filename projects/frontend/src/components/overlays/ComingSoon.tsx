import React from 'react';
import { Button, ButtonStyles, View } from '@finnoconsult/core-view';
import styled from 'styled-components';
import { Flex } from '@finnoconsult/core-view/lib/components/Fragment';
import { Icon } from '../ui';

const Close = styled(View)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const ComingSoonStyle = styled(Flex)`
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  align-items: center;
  background: ${props => props.theme.colors.overlay};
  justify-content: center;
  padding: 20px;
  position: absolute;

  ${ButtonStyles} {
    border: double 3px white;
    order: 1;
    flex: 0 0 auto;
    width: 100%;
    position: relative;

    button {
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    padding: 50px;
    /* width: 100%;
    height: 100%; */
    min-height: 20vh;
    font-size: 32px;
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.effects.bigShadow};

    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export default () => (
  <ComingSoonStyle>
    <Button back>
      <Close><Icon name="close" /></Close>
      <h1>Coming soon...</h1>
    </Button>
  </ComingSoonStyle>
);
