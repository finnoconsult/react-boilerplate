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

const InputLayout = styled.div`
  &>* {
    margin-bottom: 24px;
  }
`;


interface InputColumnLayoutProps {
  ratio: string;
}

const InputColumnLayout = styled.div<InputColumnLayoutProps>`
  display: grid;
  grid-template-columns: ${props => props.ratio};
  &>div:first-child {
    margin-right: 8px;
  }
`;

export default () => (
  <Page>
    <Title>Ihre Adresse</Title>
    <InputLayout>
      <TextField badgeTitle="PLZ" utilityView={<MapPinUtilityView />} />
      <InputColumnLayout ratio="2fr 1fr">
        <TextField badgeTitle="Strasse und Hausnummer" />
        <TextField badgeTitle="Stockwerk" />
      </InputColumnLayout>
      <InputColumnLayout ratio="1fr 1fr">
        <TextField badgeTitle="Vorname" />
        <TextField badgeTitle="Nachname" />
      </InputColumnLayout>
      <InputColumnLayout ratio="1fr 2fr">
        <TextField badgeTitle="Vorwahl" />
        <TextField badgeTitle="Handy-Nummer" />
      </InputColumnLayout>
    </InputLayout>
  </Page>
);
