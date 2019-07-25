import React from 'react';
import styled from 'styled-components';

import Text from '../Text';

const MapPinUtilityViewStyles = styled.div``;
const MapPinUtilityViewTitle = styled(Text)`
  font-size: 13px;
  font-weight: bold;
`;

export default () => (
  <MapPinUtilityViewStyles>
    <MapPinUtilityViewTitle>Meinen Standort bestimmen</MapPinUtilityViewTitle>
  </MapPinUtilityViewStyles>
);
