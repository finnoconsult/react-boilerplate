import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import Text from '../ui/Text';
import LinkStyle from '../ui/LinkStyle';
import { Children } from '../../types';

interface SMSStylesProps {
  animated?: boolean;
  hide?: boolean;
}

const SMSStyles = styled.div<SMSStylesProps>`
  position: absolute;
  z-index: 10;
  left: 8px;
  right: 8px;

  word-break: break-all;

  background-color: #f4f2f3;

  padding: 9px 16px;
  /* border-radius: 20px; */

  box-shadow: ${props => props.theme.effects.bigShadow};

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
    top: 16px;
  `)}

  ${props => props.hide && css`
    @keyframes hideAnimation {
        0% {
          top: 16px;
        }
        100% {
          top: -1000px;
        }
      }
      animation-name: hideAnimation;
      animation-duration: ${props.theme.animation.time};
      top: -1000px;
  `}
`;

interface SMSProps {
  children: JSX.Element | JSX.Element[];
  animated?: boolean;
  link?: string;
  dismissDisabled?: boolean;
  icon: Children;
}

export default (props: SMSProps) => {
  const {
    children, animated, link, dismissDisabled, icon,
  } = props;

  const [hidden, setHidden] = useState(false);
  let touchStart: { x: number; y: number };

  function onTouchStart(event: React.TouchEvent) {
    touchStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
  }

  function onTouchEnd(event: React.TouchEvent) {
    if (!touchStart || !event.changedTouches || event.changedTouches.length === 0) {
      setHidden(true);
      return;
    }
    const touchEndY = event.changedTouches[0].clientY;
    if (Math.abs(touchStart.y - touchEndY) >= 50) setHidden(true);
  }

  return (
    <SMSStyles
      hide={hidden}
      animated={animated}
      onTouchStart={!dismissDisabled ? onTouchStart : undefined}
      onTouchEnd={!dismissDisabled ? onTouchEnd : undefined}
    >
      <SMSHeader>
        {icon}
        {' '}
        Messages
      </SMSHeader>
      {link && <Link to={link}>{children}</Link>}
      {!link && children}
    </SMSStyles>
  );
};
export const SMSText = styled(Text)`
  font-size: ${props => props.theme.font.tinyText};
  margin-bottom: 8px;
  opacity: 0.6;
  `;
export const SMSHeader = styled(SMSText)`
  opacity: 1;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  color: #3a63ca;
  `;
export const SMSTitle = styled(SMSText)`
  opacity: 1;
  color: #2b2b2b;
  `;
export const SMSLink = styled(LinkStyle).attrs(() => ({ as: 'span' }))`
  font-size: ${props => props.theme.font.tinyText};
  color: #007aff;
`;
