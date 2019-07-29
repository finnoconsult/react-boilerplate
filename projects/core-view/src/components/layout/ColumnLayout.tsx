import styled, { css } from 'styled-components';

export interface InputColumnLayoutProps {
  ratio: string;
}
export const ColumnLayout = styled.div<InputColumnLayoutProps>`
  display: grid;
  grid-template-columns: ${props => props.ratio};

  ${props => props.ratio.split(' ').length > 1
    && css`&>div:first-child {
    margin-right: 8px;
  }`}
`;
