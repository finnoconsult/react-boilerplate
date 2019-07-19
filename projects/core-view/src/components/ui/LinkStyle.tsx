import styled from 'styled-components';

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  to?: string;
  title?: string;
  className?: string;
  style?: {};
  disabled?: boolean;
  onClick?: () => void;
  // onClick?: ({ event }) => void,
}

export const LinkStyle = styled.a<Props>`
  color: orange;
  cursor: pointer;

  &:hover {
    ${''/* color: gray; */}
  }
`;

export default styled(LinkStyle)``;
