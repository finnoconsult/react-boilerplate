import React from 'react';
import styled from 'styled-components';

import Text from '../ui/Text';

const VerticalProgressViewStyles = styled.div``;

interface VerticalProgressViewItemProps {
  current?: boolean;
  done?: boolean;
}

const VerticalProgressViewTitle = styled(Text)`
  font-size: 1.8rem;
  margin-left: 16px;
  a {
    color: ${props => props.theme.colors.text};
  }
`;


const VerticalProgressViewIconAndDividerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VerticalProgressViewItem = styled.div<VerticalProgressViewItemProps>`
  ${VerticalProgressViewTitle} {
    &, & a {
      color: ${props => (props.done ? props.theme.colors.ready : props.theme.colors.text)};
    }
  }
  ${VerticalProgressViewIconAndDividerStyles},
  ${VerticalProgressViewTitle} {
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


interface Items {
  title: string | JSX.Element;
  icon?: JSX.Element;
}
interface ProgressViewProps {
  items: Items[];
  progress: number;
}

export default ({ items, progress }: ProgressViewProps) => (
  <VerticalProgressViewStyles>
    {items.map(({title: item, icon: Icon}, index) => (
      <VerticalProgressViewItem key={`key${index}`} current={progress === index} done={progress > index}>
        <VerticalProgressViewIconAndDividerStyles>
          {Icon}
          {index !== items.length-1 && <VerticalDivider />}
        </VerticalProgressViewIconAndDividerStyles>
        <VerticalProgressViewTitle>
          {item}
        </VerticalProgressViewTitle>
      </VerticalProgressViewItem>
    ))}
  </VerticalProgressViewStyles>
);
