import React from 'react';
import styled from 'styled-components';

import Text from './Text';

interface ButtonStylesProps {
  cta?: boolean;
}

const ButtonStyles = styled.button<ButtonStylesProps>`
  background-color: ${props => (props.cta ? props.theme.colors.cta : props.theme.colors.background)};

  border: ${props => (props.cta ? 'none' : `1px solid ${props.theme.colors.text}`)};
  border-radius: 4px;
  padding: 13px;
  
  cursor: pointer;

  &:active {
    background-color: #fac206;
  }

  &:disabled {
    background-color: ${props => props.theme.colors.divider};
  }
`;

const ButtonText = styled(Text)`
  font-size: ${props => props.theme.font.sizeButton};
  font-weight: bold;
`;

interface Props {
  title?: string;
  cta?: boolean;
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
  onClick?: () => void;
}

export default (props: Props) => {
  const {
    title, cta, children, disabled, onClick,
  } = props;
  return (
    <ButtonStyles disabled={disabled} type="button" cta={cta} onClick={onClick}>
      {(title && !children) && (
        <ButtonText>{title}</ButtonText>
      )}
      {(!title && children) && (
        children
      )}
    </ButtonStyles>
  );
};
