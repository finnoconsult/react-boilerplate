import styled from 'styled-components';

interface DividerProps {
  fullWidth?: boolean;
}

export default styled.div<DividerProps>`
  margin: 0 ${props => !props.fullWidth && '16px'};
  height: 1px;
  background-color: ${props => props.theme.colors.divider};
  overflow: hidden;
  box-sizing: content-box;
`;
