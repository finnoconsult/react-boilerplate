import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const Title = styled(Text)`
  font-size: 1.4rem;
  margin-bottom: 12px;
`;

const RadioGroupWithTitleStyles = styled.div``;
const RadioGroupStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const RadioStyles = styled.input`
  margin-right: 12px;
  width: 16px;
  height: 16px;
  /* border: solid 1px ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.background}; */
`;

interface RadioProps {
  name: string;
  value: string;
  onChange?: (value: string) => void;
}

const Radio = ({ name, value, onChange }: RadioProps) => (
  <RadioStyles
    type="radio"
    name={name}
    value={value}
    onChange={e => onChange && onChange(e.target.value)}
  />
);

const RadioTitle = styled(Text)``;

const RadioWithTitleStyles = styled.div`
  &>* {
    display: inline-block;
  }
`;

interface RadioItem {
  value: string;
  title: string;
}

interface RadioGroupProps {
  title: string;
  name: string;
  items: RadioItem[];
  onChange?: (value: string) => void;
}

export default (props: RadioGroupProps) => {
  const {
    title,
    name,
    items,
    onChange,
  } = props;
  return (
    <RadioGroupWithTitleStyles>
      <Title>{title}</Title>
      <RadioGroupStyles>
        {items.map(item => (
          <RadioWithTitleStyles key={item.value + item.title}>
            <Radio
              name={name}
              value={item.value}
              onChange={onChange}
            />
            <RadioTitle>{item.title}</RadioTitle>
          </RadioWithTitleStyles>
        ))}
      </RadioGroupStyles>
    </RadioGroupWithTitleStyles>
  );
};
