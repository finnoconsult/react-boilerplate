import React from 'react';
import styled from 'styled-components';

interface SOSMessageStylesProps {
  grey?: boolean;
}

const SOSMessageStyles = styled.div<SOSMessageStylesProps>`
  ${props => props.grey && `background-color: ${props.theme.colors.backgroundLight};`}
  padding: 30px 16px;

  `;

const TitleWithIconStyles = styled.div`
  display: flex;
  svg, img {
    margin-top: 6px;
  }
  `;

const AuxViewStyles = styled.div`
  margin-top: 17px;
  margin-left: 34px;

  &, & > * {
    ${props => `
      color: ${props.theme.colors.text};
      font-size: ${props.theme.font.link};
      text-decoration: underline;
      font-weight: bold;
      font-family: ${props.theme.font.face.bold.default};
    `};
  }
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
