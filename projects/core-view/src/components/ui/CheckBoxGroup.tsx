import React, { useState } from 'react';
import styled from 'styled-components';

import Text from './Text';
import { Children } from '../../types';
import { CheckBox } from './Checkbox';

const Title = styled(Text)`
  font-size: 1.4rem;
  margin-bottom: 12px;
`;

const CheckBoxGroupWithTitleStyles = styled.div``;
const CheckBoxGroupStyles = styled.div``;

const CheckBoxWithTitleStyles = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 21px;
  }
`;

interface CheckBoxItem {
  value: string;
  title: Children;
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
              title={item.title}
              onChange={accepted && (() => setAcceptedAtIndex(index, accepted))}
            />
          </CheckBoxWithTitleStyles>
        ))}
      </CheckBoxGroupStyles>
    </CheckBoxGroupWithTitleStyles>
  );
};
