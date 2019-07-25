import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const VerticalProgressViewStyles = styled.div``;

interface VerticalProgressViewItemProps {
  current?: boolean;
  done?: boolean;
}

const VerticalProgressViewTitle = styled(Text)`
  font-size: 1.8rem;
  margin-left: 16px;
`;

const VerticalProgressViewItem = styled.div<VerticalProgressViewItemProps>`
  ${VerticalProgressViewTitle} {
    color: ${props => (props.done ? props.theme.colors.ready : props.theme.colors.text)};
    ${props => !props.current && !props.done && 'opacity: 0.25'}
  }

  display: flex;
  &:not(:last-child) {
    margin-bottom: 10px;
  } 
`;

const VerticalDivider = styled.div`
  width: 1px;
  min-height: 16px;
  margin-top: 10px;
  background-color: ${props => props.theme.colors.divider};
`;

const VerticalProgressViewIconAndDividerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ProgressViewProps {
  items: string[];
  progress: number;
}

export default ({ items, progress }: ProgressViewProps) => (
  <VerticalProgressViewStyles>
    {items.map((item, index) => (
      <VerticalProgressViewItem key={item} current={progress === index} done={progress > index}>
        <VerticalProgressViewIconAndDividerStyles>
          <div style={{
            width: '21px', height: '21px', backgroundColor: 'red',
          }}
          />
          {index !== items.length-1 && <VerticalDivider />}
        </VerticalProgressViewIconAndDividerStyles>
        <VerticalProgressViewTitle>
          {item}
        </VerticalProgressViewTitle>
      </VerticalProgressViewItem>
    ))}
  </VerticalProgressViewStyles>
);
