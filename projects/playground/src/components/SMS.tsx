import React from 'react';
import styled, { css } from 'styled-components';

import Text from './Text';
import Link from './Link';

interface SMSStylesProps {
  animated?: boolean;
}

const SMSStyles = styled.div<SMSStylesProps>`
  position: fixed;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  top: 16px;

  ${props => (props.animated && css`
    @keyframes appearanceAnimation {
      0% {
        top: -1000px;
      }
      100% {
        top: 16px;
      }
    }
    animation-name: appearanceAnimation;
    animation-duration: ${props.theme.animation.time};
  `)}

  background-color: #e6e5eb;

  padding: 9px 16px;
  border-radius: 20px;

  box-shadow: ${props => props.theme.effects.bigShadow};
`;

interface SMSProps {
  children: JSX.Element | JSX.Element[];
  animated?: boolean;
}

export default ({ children, animated }: SMSProps) => (
  <SMSStyles animated={animated}>
    {children}
  </SMSStyles>
);

export const SMSText = styled(Text)``;
export const SMSLink = styled(Link)`
  color: #007aff;
`;
