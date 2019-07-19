import React, { useState } from 'react';
import styled from 'styled-components';

import Text from './Text';

const TableView = styled.div``;

const Title = styled(Text)`
  margin-left: 16px;
  margin-top: 16px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const TableViewCellTitle = styled(Text)`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => props.theme.color.text};
`;

const TableViewCellDescription = styled(Text)`
  font-size: 1.6rem;
  color: ${props => props.theme.color.text};
  margin-top: 8px;
`;

interface TableViewCellStylesProps {
  isOpen: boolean;
}

const TableViewCellOuterStyles = styled.div<TableViewCellStylesProps>`
  overflow: hidden;
  ${TableViewCellDescription} {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }

  &:not(:last-child)::after {
    content: '';
    display: block;
    height: 1px;
    margin: 0 16px;
    background-color: ${props => props.theme.color.divider};
  }
`;

const TableViewCellInnerStyles = styled.div`
  padding: 16px;
`;

interface TableViewCellProps {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  toggle: () => void;
}

const TableViewCell = ({ children, isOpen, toggle }: TableViewCellProps) => (
  <TableViewCellOuterStyles isOpen={isOpen} onClick={toggle}>
    <TableViewCellInnerStyles>
      {children}
    </TableViewCellInnerStyles>
  </TableViewCellOuterStyles>
);

interface CellItem {
  title: string;
  description: string;
}

interface Props {
  title?: string;
  cellItems: CellItem[];
  onlyOneCellShouldOpen?: boolean;
}

function useOpenStates(initialState: boolean, count: number, onlyOneCellShouldOpen?: boolean): [boolean[], (index: number) => void] {
  const states = Array<boolean>(count).fill(initialState);

  const [openStates, setOpenStates] = useState(states);
  function toggle(index: number): void {
    const newStates = [...openStates];
    if (onlyOneCellShouldOpen) {
      const openIndex = newStates.indexOf(true);
      if (openIndex !== index) newStates[openIndex] = false;
    }
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  }
  return [openStates, toggle];
}

export default ({ title, cellItems, onlyOneCellShouldOpen }: Props) => {
  const [openStates, toggle] = useOpenStates(false, cellItems.length, onlyOneCellShouldOpen);

  return (
    <TableView>
      {title && <Title>{title}</Title>}
      {cellItems.map((item, index) => (
        <TableViewCell key={item.title} isOpen={openStates[index]} toggle={() => toggle(index)}>
          <TableViewCellTitle>{item.title}</TableViewCellTitle>
          <TableViewCellDescription>{item.description}</TableViewCellDescription>
        </TableViewCell>
      ))}
    </TableView>
  );
};
