import React, { useState } from 'react';
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

export default () => {
  const [firstPart, setFirstPart] = useState();
  const [secondPart, setSecondPart] = useState();

  function firstPartClicked() {
    if (!firstPart) {
      setFirstPart({
        zipCode: '80331',
        address: 'Landwehrstraße 67',
      });
    }
  }

  function secondPartClicked() {
    if (!secondPart) {
      setSecondPart({
        gender: 0,
        firstName: 'Max',
        lastName: 'Mustar',
        phoneFirstPart: '0172',
        phoneSecondPart: '847 3170',
      });
    }
  }

  return (
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
            <TextField
              defaultValue={firstPart && firstPart.zipCode}
              onClick={firstPartClicked}
              badgeTitle="PLZ"
              utilityView={<MapPinUtilityView />}
            />
          </InputColumnLayout>
          <InputColumnLayout ratio="1fr">
            <TextField
              defaultValue={firstPart && firstPart.address}
              onClick={firstPartClicked}
              badgeTitle="Strasse und Hausnummer"
            />
            {/* <TextField badgeTitle="Stockwerk" /> */}
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
            onClick={secondPartClicked}
            defaultCheckedIndex={secondPart && secondPart.gender}
          />
          <InputColumnLayout ratio="1fr 1fr">
            <TextField
              defaultValue={secondPart && secondPart.firstName}
              onClick={secondPartClicked}
              badgeTitle="Vorname"
            />
            <TextField
              defaultValue={secondPart && secondPart.lastName}
              onClick={secondPartClicked}
              badgeTitle="Nachname"
            />
          </InputColumnLayout>
          <InputColumnLayout ratio="1fr 2fr">
            <TextField
              defaultValue={secondPart && secondPart.phoneFirstPart}
              onClick={secondPartClicked}
              badgeTitle="Vorwahl"
            />
            <TextField
              defaultValue={secondPart && secondPart.phoneSecondPart}
              onClick={secondPartClicked}
              badgeTitle="Handy-Nummer"
            />
          </InputColumnLayout>
        </InputLayout>

        <FullWidthLayout>
          <Button title="Handy-Nummer bestätigen" cta />
        </FullWidthLayout>
      </SubPage>
    </Page>
  );
};
