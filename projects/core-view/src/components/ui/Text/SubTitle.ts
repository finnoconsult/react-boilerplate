import styled from 'styled-components';

import Text from './Text';

export default styled(Text)`
  font-weight: bold;
  font-size: ${props => props.theme.font.subTitle};
`;
