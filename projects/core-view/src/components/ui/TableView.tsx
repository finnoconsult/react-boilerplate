import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Text from './Text';

const TableView = styled.div``;

const Title = styled(Text)`
  font-size: 2.4rem;
  font-weight: bold;
`;

const TableViewCellTitle = styled(Text)`
  font-size: 1.6rem;
  font-weight: bold;
`;

const TableViewCellDescription = styled(Text)`
  font-size: 1.6rem;
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
    background-color: ${props => props.theme.colors.divider};
  }
`;

const TableViewCellInnerStyles = styled.div`
  padding: 16px 0;
`;

type OptionalElement = JSX.Element | undefined

interface TableViewCellProps {
  children: JSX.Element | OptionalElement[];
  isOpen: boolean;
  toggle: () => void;
}

interface TableViewCellTitleStylesProps {
  rotateRightView?: boolean;
}

const TableViewCellTitleStyles = styled.div<TableViewCellTitleStylesProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.rotateRightView && css`
    &>*:last-child {
      transition: ${props.theme.animation.transformTransition};
      transform: rotateZ(180deg);
    }
  `}
`;

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

function useOpenStates(initialState: boolean[], onlyOneCellShouldOpen?: boolean): [boolean[], (index: number) => void] {
  const [openStates, setOpenStates] = useState(initialState);
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

interface Props {
  title?: string;
  cellItems: CellItem[];
  onlyOneCellShouldOpen?: boolean;
  firstOpen?: boolean;
  rightView?: JSX.Element;
  rotateRightViewOnOpenClose?: boolean;
}

export default (props: Props) => {
  const {
    title,
    cellItems,
    onlyOneCellShouldOpen,
    firstOpen,
    rightView,
    rotateRightViewOnOpenClose,
  } = props;

  const initialState = Array<boolean>(cellItems.length).fill(false);
  if (firstOpen) initialState[0] = true;
  const [openStates, toggle] = useOpenStates(initialState, onlyOneCellShouldOpen);

  return (
    <TableView>
      {title && <Title>{title}</Title>}
      {cellItems.map((item, index) => (
        <TableViewCell key={item.title} isOpen={openStates[index]} toggle={() => toggle(index)}>
          <TableViewCellTitleStyles rotateRightView={rotateRightViewOnOpenClose && openStates[index]}>
            <TableViewCellTitle>{item.title}</TableViewCellTitle>
            {rightView}
          </TableViewCellTitleStyles>
          <TableViewCellDescription>{item.description}</TableViewCellDescription>
        </TableViewCell>
      ))}
    </TableView>
  );
};
