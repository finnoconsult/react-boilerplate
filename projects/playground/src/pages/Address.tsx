import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import Text from '../components/Text';
import Title from '../components/Title';
import TextField from '../components/TextField';

const MapPinUtilityViewStyles = styled.div``;
const MapPinUtilityViewTitle = styled(Text)`
  font-size: 13px;
  font-weight: bold;
`;

const MapPinUtilityView = () => (
  <MapPinUtilityViewStyles>
    <MapPinUtilityViewTitle>Meinen Standort bestimmen</MapPinUtilityViewTitle>
  </MapPinUtilityViewStyles>
);

export default () => (
  <Page>
    <Title>Ihre Adresse</Title>
    <TextField badgeTitle="PLZ" utilityView={<MapPinUtilityView />} />
  </Page>
);
