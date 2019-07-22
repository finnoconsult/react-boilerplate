import React from 'react';
import styled from 'styled-components';

import Text from '../Text';

const TextFieldOuterBox = styled.div`
  position: relative;  
`;

const BadgeTitle = styled(Text)`
  position: absolute;
  z-index: 1;
  left: 1.6rem;
  top: -${1.2 / 2}rem;
  
  font-size: 1.2rem;

  padding: 0 8px;
  background-color: ${props => props.theme.colors.background};
`;

const TextField = styled.input`
  position: relative;
  width: 100%;
  padding: 13px;
  
  border-radius: 4px;
  border: solid 1px ${props => props.theme.colors.border};
  outline: none;
  
  font-size: 1.6rem;
`;

const UtilityViewStyles = styled.div`
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
`;

interface Props {
  badgeTitle: string;
  placeholder?: string;
  utilityView?: JSX.Element | JSX.Element[];
}

export default ({ badgeTitle, placeholder, utilityView }: Props) => (
  <TextFieldOuterBox>
    <BadgeTitle>{badgeTitle}</BadgeTitle>
    <TextField type="text" placeholder={placeholder} />
    {utilityView && <UtilityViewStyles>{utilityView}</UtilityViewStyles>}
  </TextFieldOuterBox>
);
