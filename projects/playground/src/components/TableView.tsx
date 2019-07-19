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
  margin-left: 16px;
  margin-top: 16px;
`;

const TableViewCellDescription = styled(Text)`
  font-size: 1.6rem;
  color: ${props => props.theme.color.text};
  margin-left: 16px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

interface TableViewCellStylesProps {
  isOpen: boolean;
}

const TableViewCellStyles = styled.div<TableViewCellStylesProps>`
  overflow: hidden;
  ${TableViewCellDescription} {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
`;
interface TableViewCellProps {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  onClick: () => void;
}

const TableViewCell = ({ children, isOpen, onClick }: TableViewCellProps) => (
  <TableViewCellStyles isOpen={isOpen} onClick={onClick}>
    {children}
  </TableViewCellStyles>
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
    const newStates = onlyOneCellShouldOpen ? [false] : [...openStates];
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
        <TableViewCell key={item.title} isOpen={openStates[index]} onClick={() => toggle(index)}>
          <TableViewCellTitle>{item.title}</TableViewCellTitle>
          <TableViewCellDescription>{item.description}</TableViewCellDescription>
        </TableViewCell>
      ))}
    </TableView>
  );
};
