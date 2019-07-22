import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import Link from './Link';

const SMSStyles = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background-color: #e6e5eb;

  padding: 9px 16px;
  border-radius: 20px;
`;

interface SMSProps {
  children: JSX.Element | JSX.Element[];
}

export default ({ children }: SMSProps) => (
  <SMSStyles>
    {children}
  </SMSStyles>
);

export const SMSText = styled(Text)``;
export const SMSLink = styled(Link)`
  color: #007aff;
`;
