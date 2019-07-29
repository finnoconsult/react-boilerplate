import React, { ChangeEvent } from 'react';
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

interface TextFieldProps {
  strong?: boolean;
}

const TextField = styled.input<TextFieldProps>`
  position: relative;
  width: 100%;
  padding: 13px;

  border-radius: 4px;
  border: solid 1px ${props => (props.strong ? props.theme.colors.text : props.theme.colors.border)};
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
  defaultValue?: string;
  badgeTitle?: string;
  placeholder?: string;
  badgeEqualsPlaceholder?: boolean;
  utilityView?: JSX.Element | JSX.Element[];
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  strong?: boolean;
}

export default (props: Props) => {
  const {
    defaultValue,
    badgeTitle,
    placeholder,
    badgeEqualsPlaceholder,
    utilityView,
    onClick,
    onChange,
    strong,
  } = props;

  let badge;
  if (badgeEqualsPlaceholder && !defaultValue) {
    badge = null;
  } else {
    badge = <BadgeTitle>{badgeTitle}</BadgeTitle>;
  }

  return (
    <TextFieldOuterBox>
      {badge}
      <TextField
        // readOnly
        defaultValue={defaultValue}
        onClick={onClick}
        onChange={onChange}
        type="text"
        placeholder={badgeEqualsPlaceholder ? badgeTitle : placeholder}
        strong={strong}
      />
      {utilityView && <UtilityViewStyles>{utilityView}</UtilityViewStyles>}
    </TextFieldOuterBox>
  );
};
