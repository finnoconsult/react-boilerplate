import React from 'react';
import styled from 'styled-components';

import Text from './Text';

interface ButtonStylesProps {
  cta?: boolean;
}

const ButtonStyles = styled.button<ButtonStylesProps>`
  background-color: ${props => (props.cta ? props.theme.color.cta : props.theme.color.background)};
  border: ${props => (props.cta ? 'none' : `1px solid ${props.theme.color.text}`)};
  border-radius: 4px;
  pading: 14px auto;
  cursor: pointer;
`;

const ButtonText = styled(Text)`
  font-size: ${props => props.theme.font.sizeButton};
  font-weight: bold;
  color: ${props => props.theme.color.text};
`;

interface Props {
  title?: string;
  cta?: boolean;
}

export default ({ title, cta }: Props) => (
  <ButtonStyles cta={cta}>
    {title && (
      <ButtonText>{title}</ButtonText>
    )}
  </ButtonStyles>
);
