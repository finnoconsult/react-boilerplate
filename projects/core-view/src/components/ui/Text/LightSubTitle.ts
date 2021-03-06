import styled from 'styled-components';

import SubTitle from './SubTitle';

export default styled(SubTitle)`
  color: ${props => props.theme.colors.border};
  font-weight: normal;
  font-family:  ${props => props.theme.font.face.default};
`;
