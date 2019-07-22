import styled from 'styled-components';

export const FullWidthLayout = styled.div`
  width: 100%;
  &>* {
    width: 100%;
  }  
`;

interface InputColumnLayoutProps {
  ratio: string;
}

export const ColumnLayout = styled.div<InputColumnLayoutProps>`
  display: grid;
  grid-template-columns: ${props => props.ratio};

  &>div:first-child {
    margin-right: 8px;
  }
`;
