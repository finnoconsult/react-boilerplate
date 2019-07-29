import styled from 'styled-components';

import View from '../../View';

// import styles from '../../theme/app.global.scss';

export interface TextProps {
  margin?: boolean;
  left?: boolean;
  padding?: string;
  antialiased?: boolean;
}

export const Text = styled(View).attrs(() => ({ as: 'p' }))<TextProps>`
  margin: ${props => props.margin && '0 0 8px 0'};
  font-size: ${props => props.theme.font.text};
  color: ${props => props.color || props.theme.colors.text};

  ${props => props.left && `
    text-align: left !important;
  `}

  ${props => props.padding && `
    padding: ${props.padding};
  `}

  ${props => props.antialiased && `
    letter-spacing: normal;
    text-shadow: #fff 0px 1px 1px;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
    -webkit-font-smoothing: subpixel-antialiased;
  `}
`;
Text.displayName='Text';

export default Text;
