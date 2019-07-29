import React from 'react';
import styled from 'styled-components';

import Text from '../Text';

const MapPinUtilityViewStyles = styled.div`
  display: flex;
  align-items: center;

  &>*:first-child {
    margin-right: 18px;
  }
`;

const MapPinUtilityViewTitle = styled(Text)`
  font-size: ${props => props.theme.font.text};
  font-weight: bold;
`;

interface Props {
  locatorView?: JSX.Element;
  onClick?: () => void;
}

export default ({ locatorView, onClick }: Props) => (
  <MapPinUtilityViewStyles onClick={onClick}>
    {locatorView}
    <MapPinUtilityViewTitle>Mein Standort</MapPinUtilityViewTitle>
  </MapPinUtilityViewStyles>
);
