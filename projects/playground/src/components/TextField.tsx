import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const TextFieldOuterBox = styled.div`
  position: relative;  
`;

const BadgeTitle = styled(Text)`
  position: absolute;
  z-index: 1;
  left: 1.6rem;
  top: -${1.2 / 2}rem;
  
  color: ${props => props.theme.color.text}
  font-size: 1.2rem;

  padding: 0 8px;
  background-color: ${props => props.theme.color.background};
`;

const TextField = styled.input`
  position: relative;
  width: 100%;
  padding: 13px;
  
  border-radius: 4px;
  border: solid 1px ${props => props.theme.color.border};
  outline: none;
  
  font-size: 1.6rem;
  color: ${props => props.theme.color.text};
`;

export default () => (
  <TextFieldOuterBox>
    <BadgeTitle>Title</BadgeTitle>
    <TextField type="text" placeholder="Put some text here!" />
  </TextFieldOuterBox>
);
