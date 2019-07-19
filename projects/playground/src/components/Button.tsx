import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const ButtonStyles = styled.button`
  background-color: ${props => props.theme.color.cta};
  border: none;
  border-radius: 4px;
  pading: 14px auto;
`;

const ButtonText = styled(Text)`
  font-size: ${props => props.theme.font.sizeButton};
`;

interface Props {
  title?: string;
}

export default ({ title }: Props) => (
  <ButtonStyles>
    {title && (
      <ButtonText>{title}</ButtonText>
    )}
  </ButtonStyles>
);
