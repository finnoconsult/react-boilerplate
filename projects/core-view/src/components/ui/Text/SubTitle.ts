import styled from 'styled-components';

import Text from './Text';

export interface SubTitleProps {
  big?: boolean;
}

export default styled(Text)<SubTitleProps>`
  font-weight: bold;
  font-size: ${props => (props.big ? props.theme.font.subTitleBig : props.theme.font.subTitle)};
  font-family: ${props => (props.big ? props.theme.font.face.bold.slab : props.theme.font.face.bold.default)};
`;
