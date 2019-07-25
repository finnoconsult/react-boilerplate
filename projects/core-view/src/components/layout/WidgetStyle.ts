import styled, { css } from 'styled-components';

import { FlexFragment } from '../Fragment';
// import { WidgetConfigType } from '@finnoconsult/core-model';
// import { WidgetType } from './WidgetType';

interface TODOWidgetConfigType {
  order?: number | string;
  column?: number | string;
  row?: number | string;
  area?: number | string;
}

export const WidgetStyle = styled(FlexFragment)<TODOWidgetConfigType>`
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
