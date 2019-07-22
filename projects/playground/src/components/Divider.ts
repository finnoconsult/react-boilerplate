import styled from 'styled-components';

interface DividerProps {
  fullWidth?: boolean;
}

export default styled.div<DividerProps>`
  padding: 0 ${props => props.fullWidth && '16px'};
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.divider};
`;
