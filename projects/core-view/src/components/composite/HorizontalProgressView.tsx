import React from 'react';
import styled from 'styled-components';

import Text from '../ui/Text';
import { Children } from '../../types';
import { Flex } from '../Fragment';

const ProgressViewStyles = styled.div`
  background-color: ${props => props.theme.colors.backgroundLight};
  display: flex;
  justify-content: space-between;
`;

const ProgressViewTitle = styled(Text)`
  font-size: 1.2rem;
  text-align: center;

  a {
    color: ${props => props.theme.colors.text};
  }
`;

interface ProgressViewItemStylesProps {
  done: boolean;
  current: boolean;
}

const ProgressViewSeparator = styled(Flex)`
  position: absolute;
  right: -10px;
  top: 0;
  height: 100%;
  align-items: center;
  /* & > * {
    line-height: 0;
  } */
`;

const ProgressViewItemStyles = styled.div<ProgressViewItemStylesProps>`
  padding: 12px 0;
  flex: 1 0 auto;
  position: relative;

  ${props => (props.done || props.current) && `border-bottom: 2px solid ${props.theme.colors.text}`};
  ${props => !props.done && !props.current && 'opacity: 0.25'};

  &>${ProgressViewTitle} {
    ${props => props.current && 'font-weight: bold;'}
  }
`;

interface HorizontalProgressViewProps {
  items: Children[];
  progress: number;
  separator: Children;
}

export default ({ items, progress, separator }: HorizontalProgressViewProps) => (
  <ProgressViewStyles>
    {items.map((item, index) => (
      <ProgressViewItemStyles key={typeof (item) !== 'object' ? item as string : `horizontal${index}`} done={progress > index} current={progress === index}>
        <ProgressViewTitle>{item}</ProgressViewTitle>
        {index < items.length -1 && separator && <ProgressViewSeparator>{separator}</ProgressViewSeparator>}
      </ProgressViewItemStyles>
    ))}
  </ProgressViewStyles>
);
