import React, { useState } from 'react';
import styled from 'styled-components';

import Text from './Text';

const Title = styled(Text)`
  font-size: 1.4rem;
  margin-bottom: 12px;
`;

const CheckBoxGroupWithTitleStyles = styled.div``;
const CheckBoxGroupStyles = styled.div``;

const CheckboxStyles = styled.input`
  margin-right: 12px;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  border: solid 1px #000000;
  flex-shrink: 0;
`;

interface CheckboxProps {
  name: string;
  value: string;
  onChange?: (value: string) => void;
}

const CheckBox = ({ name, value, onChange }: CheckboxProps) => (
  <CheckboxStyles
    type="checkbox"
    name={name}
    value={value}
    onChange={e => onChange && onChange(e.target.value)}
  />
);

const CheckBoxTitle = styled(Text)``;

const CheckBoxWithTitleStyles = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 21px;
  } 
`;

interface CheckBoxItem {
  value: string;
  title: string;
}

interface CheckBoxGroupProps {
  title?: string;
  name: string;
  items: CheckBoxItem[];
  accepted?: (allAccepted: boolean) => void;
}

export default (props: CheckBoxGroupProps) => {
  const {
    title,
    name,
    items,
    accepted,
  } = props;

  const [acceptedArray, setAccepted] = useState(items.map(() => false));

  function setAcceptedAtIndex(index: number, areAllAccepted: (allAccepted: boolean) => void) {
    const newAcceptedArray = [...acceptedArray];
    newAcceptedArray[index] = !newAcceptedArray[index];
    setAccepted(newAcceptedArray);

    const allAccepted = newAcceptedArray.reduce((sum, next) => next && sum, true);
    areAllAccepted(allAccepted);
  }

  return (
    <CheckBoxGroupWithTitleStyles>
      {title && <Title>{title}</Title>}
      <CheckBoxGroupStyles>
        {items.map((item, index) => (
          <CheckBoxWithTitleStyles key={item.value + item.title}>
            <CheckBox
              name={name}
              value={item.value}
              onChange={accepted && (() => setAcceptedAtIndex(index, accepted))}
            />
            <CheckBoxTitle>{item.title}</CheckBoxTitle>
          </CheckBoxWithTitleStyles>
        ))}
      </CheckBoxGroupStyles>
    </CheckBoxGroupWithTitleStyles>
  );
};
