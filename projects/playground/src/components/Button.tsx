import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../theme';

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
  title: string;
}

export default (props: Props) => {
  const { title } = props;
  return (
    <ThemeProvider theme={theme}>
      {title && (
        <ButtonStyles>
          <ButtonText>{title}</ButtonText>
        </ButtonStyles>
      )}
    </ThemeProvider>
  );
};
