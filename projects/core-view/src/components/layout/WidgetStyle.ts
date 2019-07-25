import styled, { css } from 'styled-components';

import { FlexFragment } from '../Fragment';
import { StandaloneWidgetConfigType } from '@finnoconsult/core-model';

export const WidgetStyle = styled(FlexFragment) <StandaloneWidgetConfigType>`
  height: auto;
  flex: 0 1 auto;

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
