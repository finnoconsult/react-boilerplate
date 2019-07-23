import React from 'react';
import styled from 'styled-components';

interface SOSMessageStylesProps {
  grey?: boolean;
}

const SOSMessageStyles = styled.div<SOSMessageStylesProps>`
  ${props => props.grey && `background-color: ${props.theme.colors.backgroundLight};`}
  padding: 33px 0;
`;

interface SOSMessageProps {
  children: JSX.Element | JSX.Element[];
  grey?: boolean;
}

export default ({ children, grey }: SOSMessageProps) => <SOSMessageStyles grey={grey}>{children}</SOSMessageStyles>;
