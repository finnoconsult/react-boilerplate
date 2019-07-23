import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import SubPage from '../components/SubPage';
import Title from '../components/Text/Title';
import TextField, { MapPinUtilityView } from '../components/TextField';
import Button from '../components/Button';
import Divider from '../components/Divider';
import RadioGroup from '../components/RadioGroup';
import HorizontalProgressView from '../components/HorizontalProgressView';

import { FullWidthLayout, ColumnLayout as InputColumnLayout } from '../components/layouts';

const InputLayout = styled.div`
  &>div {
    margin-bottom: 24px;
  }

  ${Title} {
    margin-bottom: 16px;
  }
`;

export default () => (
  <Page>
    <HorizontalProgressView
      items={[
        'Adresse',
        'Handy-Nummer bestätigen',
        'Beauftragen',
      ]}
      progress={0}
    />
    <SubPage>
      <InputLayout>
        <Title>Ihre Adresse</Title>
        <InputColumnLayout ratio="1fr">
          <TextField badgeTitle="PLZ" utilityView={<MapPinUtilityView />} />
        </InputColumnLayout>
        <InputColumnLayout ratio="2fr 1fr">
          <TextField badgeTitle="Strasse und Hausnummer" />
          <TextField badgeTitle="Stockwerk" />
        </InputColumnLayout>
        <Divider fullWidth />

        <Title>Wie können wir Sie erreichen?</Title>
        <RadioGroup
          title="Anrede"
          name="gender"
          items={[
            { value: 'male', title: 'Herr' },
            { value: 'female', title: 'Frau' },
          ]}
        // onChange={value => console.log(value)}
        />
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
    </SubPage>
  </Page>
);
