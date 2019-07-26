import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Page,
  SubPage,
  Text,
  Title,
  SmallText,
  TextField,
  MapPinUtilityView,
  Button,
  Divider,
  RadioGroup,
  HorizontalProgressView,
  FullWidthLayout,
  ColumnLayout as InputColumnLayout,
} from '@finnoconsult/core-view';

import Icon from '../ui/Icon';

const InputLayout = styled.div`
  &>div {
    margin-bottom: 24px;
  }

  &>${Title} {
    margin-bottom: 16px;
  }

  &>${Text} {
    margin-bottom: 16px;
  }
`;

const DescriptionText = styled(SmallText)`
  margin-top: 16px;
`;

export default () => {
  const [firstPart, setFirstPart] = useState();
  const [secondPart, setSecondPart] = useState();

  function firstPartClicked() {
    if (!firstPart) {
      setFirstPart({
        zipCode: '80331',
        street: 'Landwehrstraße',
        houseNumber: '67',
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
          <Text>Wo können wir helfen?</Text>
          <InputColumnLayout ratio="1fr 2fr">
            <TextField
              defaultValue={firstPart && firstPart.zipCode}
              onClick={firstPartClicked}
              badgeTitle="PLZ"
              badgeEqualsPlaceholder
            />
            <TextField
              strong
              onClick={firstPartClicked}
              utilityView={(
                <MapPinUtilityView
                  locatorView={<Icon name="gps" />}
                  onClick={firstPartClicked}
                />
              )}
            />
          </InputColumnLayout>
          <InputColumnLayout ratio="1fr 1fr">
            <TextField
              defaultValue={firstPart && firstPart.street}
              onClick={firstPartClicked}
              badgeTitle="Strasse"
              badgeEqualsPlaceholder
            />
            <TextField
              defaultValue={firstPart && firstPart.houseNumber}
              onClick={firstPartClicked}
              badgeTitle="Hausnummer"
              badgeEqualsPlaceholder
            />
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
              badgeEqualsPlaceholder
            />
            <TextField
              defaultValue={secondPart && secondPart.lastName}
              onClick={secondPartClicked}
              badgeTitle="Nachname"
              badgeEqualsPlaceholder
            />
          </InputColumnLayout>
          <InputColumnLayout ratio="1fr 2fr">
            <TextField
              defaultValue={secondPart && secondPart.phoneFirstPart}
              onClick={secondPartClicked}
              badgeTitle="Vorwahl"
              badgeEqualsPlaceholder
            />
            <TextField
              defaultValue={secondPart && secondPart.phoneSecondPart}
              onClick={secondPartClicked}
              badgeTitle="Handy-Nummer"
              badgeEqualsPlaceholder
            />
          </InputColumnLayout>
          <DescriptionText>
            Bitte stellen Sie sicher, dass Sie telefonisch
            erreichbar sind.
          </DescriptionText>
        </InputLayout>

        <FullWidthLayout>
          <Button
            disabled={!firstPart || !secondPart}
            title="Handy-Nummer bestätigen"
            cta
            link="/address/sms"
          />
        </FullWidthLayout>
        <DescriptionText>
          Der Auftrag wird erst aktiv, wenn Sie Ihre Handy-Nummer bestätigt haben. Diese brauchen wir, um Sie ggf. zu kontaktieren.
        </DescriptionText>
      </SubPage>
    </Page>
  );
};
