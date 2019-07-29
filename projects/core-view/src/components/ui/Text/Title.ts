import styled from 'styled-components';
import Text from './Text';

export default styled(Text)`
  font-size: ${props => props.theme.font.title};
  font-weight: bold;
  font-family: ${props => props.theme.font.face.bold.slab};
`;
