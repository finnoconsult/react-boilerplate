import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import Text from './Text';
import View from '../View';
import { Children } from '../../types';
import Divider from './Divider';

const TableView = styled.div``;

const Title = styled(Text)`
  font-size: ${props => props.theme.font.title};
  font-weight: bold;
  font-family: ${props => props.theme.font.face.bold.slab};
`;

const TableViewCellTitle = styled(Text)`
  font-size: ${props => props.theme.font.subTitle};
  font-family: ${props => props.theme.font.face.bold.default};
  font-weight: bold;
`;

const TableViewCellDescription = styled(View)`
  font-size: ${props => props.theme.font.text};

  &, & > * {
    margin-top: 8px;
    display: block;
  }
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
  orderView?: JSX.Element;
}

interface TableViewCellTitleStylesProps {
  rotateRightView?: boolean;
}

const TableViewCellTitleStyles = styled.div<TableViewCellTitleStylesProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${props => props.rotateRightView && css`
    &>*:last-child {
      transition: ${props.theme.animation.transformTransition};
      transform: rotateZ(180deg);
    }
  `}
`;

const TableViewCell = (props: TableViewCellProps) => {
  const {
    children, isOpen, orderView,
  } = props;
  return (
    <TableViewCellOuterStyles
      isOpen={isOpen}
      isOrdered={orderView !== undefined && orderView !== null}
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
  description: Children;
  link?: string;
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
  onClick?: () => void;
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
    onClick,
  } = props;

  const initialState = Array<boolean>(cellItems.length).fill(false);
  if (firstOpen) initialState[0] = true;
  const [openStates, toggle] = useOpenStates(initialState, onlyOneCellShouldOpen);


  // TODO: Link vs styled
  // interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  //   link: string;
  //   children: Children;
  // }
  // const Container = ({ link }: {link?: string}): React.Component<LinkProps, any> => Link;

  function cellClicked(index: number) {
    if (!disableOpening) toggle(index);
    if (onClick !== undefined && onClick !== null) onClick();
  }

  const cell = (item: CellItem, index: number) => (
    <TableViewCell
      key={item.title}
      isOpen={!disableOpening && openStates[index]}
      orderView={orderView && orderView(index)}
    >
      <TableViewCellTitleStyles onClick={() => cellClicked(index)} rotateRightView={rotateRightViewOnOpenClose && openStates[index]}>
        <TableViewCellTitle>{item.title}</TableViewCellTitle>
        {rightView}
      </TableViewCellTitleStyles>
      <TableViewCellDescription>{item.description}</TableViewCellDescription>
    </TableViewCell>
  );

  return (
    <TableView>
      {title && <Title>{title}</Title>}
      {cellItems.map((item, index) => (
        <div key={item.title || `tableview${index}`}>
          {item.link && <Link key={item.title || `tableview${index}`} to={item.link}>{cell(item, index)}</Link>}
          {!item.link && cell(item, index)}
          {index !== cellItems.length - 1 && <Divider fullWidth />}
        </div>
      ))}
    </TableView>
  );
};
