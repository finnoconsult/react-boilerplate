import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import Title from '../components/Title';
import TextField, { MapPinUtilityView } from '../components/TextField';
import Button from '../components/Button';
import Divider from '../components/Divider';

import { FullWidthLayout, ColumnLayout as InputColumnLayout } from '../components/layouts';

const InputLayout = styled.div`
  &>div {
    margin-bottom: 24px;
  }
`;

export default () => (
  <Page>
    <InputLayout>
      <Title>Ihre Adresse</Title>
      <InputColumnLayout ratio="1fr">
        <TextField badgeTitle="PLZ" utilityView={<MapPinUtilityView />} />
      </InputColumnLayout>
      <InputColumnLayout ratio="2fr 1fr">
        <TextField badgeTitle="Strasse und Hausnummer" />
        <TextField badgeTitle="Stockwerk" />
      </InputColumnLayout>
      <Divider />

      <Title>Wie können wir Sie erreichen?</Title>
      <InputColumnLayout ratio="1fr 1fr">
        <TextField badgeTitle="Vorname" />
        <TextField badgeTitle="Nachname" />
      </InputColumnLayout>
      <InputColumnLayout ratio="1fr 2fr">
        <TextField badgeTitle="Vorwahl" />
        <TextField badgeTitle="Handy-Nummer" />
      </InputColumnLayout>
    </InputLayout>

    <FullWidthLayout>
      <Button title="Handy-Nummer bestätigen" cta />
    </FullWidthLayout>
  </Page>
);
