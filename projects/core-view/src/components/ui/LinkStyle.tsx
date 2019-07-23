import styled from 'styled-components';

import { Children } from '../../types';

interface Props {
  children: Children;
  to?: string;
  title?: string;
  className?: string;
  style?: {};
  disabled?: boolean;
  onClick?: () => void;
  // onClick?: ({ event }) => void,
}

export const LinkStyle = styled.a<Props>`
  cursor: pointer;

  &:hover {
    ${''/* color: gray; */}
  }
`;

export default styled(LinkStyle)``;
