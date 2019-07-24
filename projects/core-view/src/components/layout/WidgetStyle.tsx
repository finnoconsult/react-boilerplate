import styled, { css } from 'styled-components';

import { FlexFragment, FragmentProps } from '../Fragment';

export interface WidgetStyleProps extends FragmentProps {
  order?: number | string;
  column?: number | string;
  row?: number | string;
  area?: number | string;
}

export const WidgetStyle = styled(FlexFragment)<WidgetStyleProps>`
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
