import React, { useState, ChangeEvent } from 'react';
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
  FullWidthLayout,
  ColumnLayout as InputColumnLayout,
  FloatingView,
} from '@finnoconsult/core-view';

import Icon from '../ui/Icon';
import AddressSubMenu from './AddressSubMenu';


const DescriptionText = styled(SmallText)`
  margin-top: 8px !important;
  /* margin-bottom: 46px; */
  font-size: 1.4rem;
`;

const InputLayout = styled.div`
  &>div {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  &>${Text} {
    margin-bottom: 16px;
  }

  &>${Title} {
    margin-bottom: 0 !important;
  }
`;

export default () => {
  const [addressZipCode, setAddressZipCode] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressHouseNumber, setAddressHouseNumber] = useState('');
  const [secondPart, setSecondPart] = useState();

  const firstPart = addressZipCode && addressStreet && !!addressHouseNumber;

  function firstPartClicked() {
    setAddressZipCode('80331');
    setAddressStreet('Landwehrstraße');
    setAddressHouseNumber('67');
  }

  function handleTextInputChange(e: ChangeEvent<HTMLInputElement>, callback: (arg0: string) => void) {
    callback(e.currentTarget.value);
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
      <AddressSubMenu progress={0} />
      <SubPage>
        <InputLayout>
          <Title>Ihre Adresse</Title>
          <Text>Wo können wir helfen?</Text>
          <InputColumnLayout ratio="1fr 2fr">
            <TextField
              defaultValue={addressZipCode}
              // onClick={firstPartClicked}
              onChange={e => handleTextInputChange(e, setAddressZipCode)}
              badgeTitle="PLZ"
              badgeEqualsPlaceholder
            />
            <TextField
              strong
              // onClick={firstPartClicked}
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
              defaultValue={addressStreet}
              // onClick={firstPartClicked}
              onChange={e => handleTextInputChange(e, setAddressStreet)}
              badgeTitle="Strasse"
              badgeEqualsPlaceholder
            />
            <TextField
              defaultValue={addressHouseNumber}
              // onClick={firstPartClicked}
              onChange={e => handleTextInputChange(e, setAddressHouseNumber)}
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
          <InputColumnLayout ratio="1fr 2fr" style={{ marginBottom: '0px' }}>
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
      </SubPage>

      <FloatingView bottom>
        <SubPage>
          <FullWidthLayout>
            <Button
              disabled={!firstPart || !secondPart}
              title="Handy-Nummer bestätigen"
              cta
              link="/address/sms"
            />
            <DescriptionText marginBottom="0px">
              Der Auftrag wird erst aktiv, wenn Sie Ihre Handy-Nummer bestätigt haben. Diese brauchen wir, um Sie ggf. zu kontaktieren.
            </DescriptionText>
          </FullWidthLayout>
        </SubPage>
      </FloatingView>
    </Page>
  );
};
