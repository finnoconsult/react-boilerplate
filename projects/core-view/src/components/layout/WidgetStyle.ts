import styled, { css } from 'styled-components';

import { FlexFragment } from '../Fragment';
import { WidgetType } from './WidgetType';

export const WidgetStyle = styled(FlexFragment) <WidgetType>`
  flex: 0 0 auto;
  height: auto;

  ${''/* In case of flex box */}
  ${props => props.order && css`
    order: ${props.order};
  `}

  ${''/* In case of grid */}
  ${props => props.column && css`
    grid-column: ${props.column};
  `}
  ${props => props.area && css`
    grid-area: ${props.area};
  `}
`;
WidgetStyle.displayName='WidgetStyle';

export default WidgetStyle;
