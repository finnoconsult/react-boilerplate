import styled from 'styled-components';
import { View } from './View';

interface FloatingViewProps {
  position?: string;
  top?: string | boolean;
  bottom?: string | boolean;
}

export const FloatingView = styled(View)<FloatingViewProps>`
  position: ${props => props.position || 'absolute'};

  ${props => props.bottom && `
    bottom: ${props.bottom === true ? '10px' : props.bottom};
    left: 0;
    width: 100%;
  `}

  ${props => props.top && `
    top: ${props.top === true ? '10px' : props.top};
    left: 0;
    width: 100%;
  `}
`;

export default FloatingView;
