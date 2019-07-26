import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Text from './Text';
import Divider from './Divider';

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
  isOrdered?: boolean;
}

const TableViewCellOuterStyles = styled.div<TableViewCellStylesProps>`
  display: flex;
  padding: 16px 0;

  ${props => props.isOrdered && css`
    &>*:first-child {
      flex: 0 0 auto;
      margin-right: 12px;
    }
  `}

  overflow: hidden;
  ${TableViewCellDescription} {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
`;

const TableViewCellInnerStyles = styled.div`
  flex-grow: 1;
`;

type OptionalElement = JSX.Element | undefined

interface TableViewCellProps {
  children: JSX.Element | OptionalElement[];
  isOpen: boolean;
  toggle?: () => void;
  orderView?: JSX.Element;
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

const TableViewCell = (props: TableViewCellProps) => {
  const {
    children, isOpen, toggle, orderView,
  } = props;
  return (
    <TableViewCellOuterStyles
      isOpen={isOpen}
      isOrdered={orderView !== undefined && orderView !== null}
      onClick={toggle}
    >
      {orderView}
      <TableViewCellInnerStyles>
        {children}
      </TableViewCellInnerStyles>
    </TableViewCellOuterStyles>
  );
};

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
  disableOpening?: boolean;
  firstOpen?: boolean;
  rightView?: JSX.Element;
  rotateRightViewOnOpenClose?: boolean;
  orderView?: (index: number) => JSX.Element;
}

export default (props: Props) => {
  const {
    title,
    cellItems,
    onlyOneCellShouldOpen,
    disableOpening,
    firstOpen,
    rightView,
    rotateRightViewOnOpenClose,
    orderView,
  } = props;

  const initialState = Array<boolean>(cellItems.length).fill(false);
  if (firstOpen) initialState[0] = true;
  const [openStates, toggle] = useOpenStates(initialState, onlyOneCellShouldOpen);

  return (
    <TableView>
      {title && <Title>{title}</Title>}
      {cellItems.map((item, index) => (
        <div>
          <TableViewCell
            key={item.title}
            isOpen={!disableOpening && openStates[index]}
            toggle={!disableOpening ? (() => toggle(index)) : undefined}
            orderView={orderView && orderView(index)}
          >
            <TableViewCellTitleStyles rotateRightView={rotateRightViewOnOpenClose && openStates[index]}>
              <TableViewCellTitle>{item.title}</TableViewCellTitle>
              {rightView}
            </TableViewCellTitleStyles>
            <TableViewCellDescription>{item.description}</TableViewCellDescription>
          </TableViewCell>
          {index !== cellItems.length-1 && <Divider fullWidth />}
        </div>
      ))}
    </TableView>
  );
};
