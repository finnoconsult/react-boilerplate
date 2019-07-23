import React from 'react';
import styled from 'styled-components';

interface SOSMessageStylesProps {
  grey?: boolean;
}

const SOSMessageStyles = styled.div<SOSMessageStylesProps>`
  ${props => props.grey && `background-color: ${props.theme.colors.backgroundLight};`}
  padding: 33px 16px;
`;

const TitleWithIconStyles = styled.div`
  display: flex;
`;

const AuxViewStyles = styled.div`
  margin-top: 17px;
`;

interface SOSMessageProps {
  children: JSX.Element | JSX.Element[];
  grey?: boolean;
  auxView?: JSX.Element | JSX.Element[];
}

export default ({ children, grey, auxView }: SOSMessageProps) => (
  <SOSMessageStyles grey={grey}>
    <TitleWithIconStyles>
      {/* // TODO: Icon here */}
      {children}
    </TitleWithIconStyles>
    {auxView && <AuxViewStyles>{auxView}</AuxViewStyles>}
  </SOSMessageStyles>
);
