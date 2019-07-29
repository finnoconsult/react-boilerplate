import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { Children } from '../../types';

const CheckboxStyles = styled.input`
  margin-right: 12px;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  border: solid 1px #000000;
  flex-shrink: 0;
`;
interface LabelProps {
  htmlFor?: string;
}
const CheckBoxLabel = styled(Text).attrs(() => ({ as: 'label' }))<LabelProps>``;
interface CheckboxProps {
  name: string;
  value: string;
  title: Children;
  onChange?: (value: string) => void;
}
export const CheckBox = ({
  name, value, title, onChange,
}: CheckboxProps) => (
  <>
    <CheckboxStyles type="checkbox" id={value} name={name} value={value} onChange={e => onChange && onChange(e.target.value)} />
    <CheckBoxLabel htmlFor={value}>{title}</CheckBoxLabel>
  </>
);
