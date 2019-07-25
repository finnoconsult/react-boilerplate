import styled from 'styled-components';

import { Children } from '../../types';

export interface Props {
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
  font-size: ${props => props.theme.font.link};
  color: ${props => props.theme.colors.text};

  &:hover {
    ${''/* color: gray; */}
  }
`;

export default styled(LinkStyle)``;
