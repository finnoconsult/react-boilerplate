import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const ProgressViewStyles = styled.div`
  background-color: ${props => props.theme.colors.backgroundLight};
  display: flex;
  justify-content: space-between;
`;

const ProgressViewTitle = styled(Text)`
  font-size: 1.2rem;
  text-align: center;
`;

interface ProgressViewItemStylesProps {
  done: boolean;
  current: boolean;
}

const ProgressViewItemStyles = styled.div<ProgressViewItemStylesProps>`
  padding: 12px 0;
  flex: 1 0 auto;
  
  ${props => (props.done || props.current) && `border-bottom: 2px solid ${props.theme.colors.text}`};
  ${props => !props.done && !props.current && 'opacity: 0.25'};

  &>${ProgressViewTitle} {
    ${props => props.current && 'font-weight: bold;'}
  }
`;

interface HorizontalProgressViewProps {
  items: string[];
  progress: number;
}

export default ({ items, progress }: HorizontalProgressViewProps) => (
  <ProgressViewStyles>
    {items.map((item, index) => (
      <ProgressViewItemStyles key={item} done={progress > index} current={progress === index}>
        <ProgressViewTitle>{item}</ProgressViewTitle>
      </ProgressViewItemStyles>
    ))}
  </ProgressViewStyles>
);