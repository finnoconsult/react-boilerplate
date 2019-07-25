import styled from 'styled-components';

import Text from './Text';

export default styled(Text)`
  font-size: ${props => props.theme.font.smallText};
`;
