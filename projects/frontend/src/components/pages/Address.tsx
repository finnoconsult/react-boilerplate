import React, {
  useState,
  ChangeEvent,
} from 'react';
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
  const [secondPart, setSecondPart] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    phoneFirstPart: '',
    phoneSecondPart: '',
  });

  const firstPartDefined = addressZipCode && addressStreet && !!addressHouseNumber;
  const secondPartDefined = secondPart && secondPart.gender
    && secondPart.firstName
    && secondPart.lastName
    && secondPart.phoneFirstPart
    && secondPart.phoneSecondPart;

  function firstPartClicked() {
    setAddressZipCode('80331');
    setAddressStreet('Landwehrstraße');
    setAddressHouseNumber('67');
  }

  function handleTextInputChange(callback: (arg0: string) => void, e?: ChangeEvent<HTMLInputElement>) {
    if (e) {
      callback(e.currentTarget.value);
    }
  }

  // function secondPartClicked() {
  //   // if (!secondPart) {
  //   setSecondPart({
  //     gender: 'male',
  //     firstName: 'Max',
  //     lastName: 'Mustar',
  //     phoneFirstPart: '0172',
  //     phoneSecondPart: '847 3170',
  //   });
  //   // }
  // }

  function handleTextSectionChange(callback: (name: string, value: string) => void, name: string, e?: ChangeEvent<HTMLInputElement>) {
    if (e) {
      callback(name, e.currentTarget.value);
    }
  }

  function setSecordPartHelper(name: string, value: string) {
    setSecondPart({
      ...secondPart,
      [name]: value,
    });
  }

  const genderItems = [
    { value: 'male', title: 'Herr' },
    { value: 'female', title: 'Frau' },
  ];

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
              type="number"
              // onClick={firstPartClicked}
              onChange={e => handleTextInputChange(setAddressZipCode, e)}
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
              onChange={e => handleTextInputChange(setAddressStreet, e)}
              badgeTitle="Strasse"
              badgeEqualsPlaceholder
            />
            <TextField
              defaultValue={addressHouseNumber}
              type="number"
              // onClick={firstPartClicked}
              onChange={e => handleTextInputChange(setAddressHouseNumber, e)}
              badgeTitle="Hausnummer"
              badgeEqualsPlaceholder
            />
          </InputColumnLayout>
          <Divider fullWidth />

          <Title>Wie können wir Sie erreichen?</Title>
          <RadioGroup
            title="Anrede"
            name="gender"
            items={genderItems}
            // onClick={secondPartClicked}
            onChange={value => setSecondPart({ ...secondPart, gender: value })}
            // onClick={e => handleTextSectionChange(setSecordPartHelper, 'gender', e)}
            defaultCheckedIndex={secondPart && genderItems.findIndex(gender => gender.value === secondPart.gender)}
          />
          <InputColumnLayout ratio="1fr 1fr">
            <TextField
              defaultValue={secondPart && secondPart.firstName}
              // onClick={secondPartClicked}
              onChange={e => handleTextSectionChange(setSecordPartHelper, 'firstName', e)}
              badgeTitle="Vorname"
              badgeEqualsPlaceholder
            />
            <TextField
              defaultValue={secondPart && secondPart.lastName}
              // onClick={secondPartClicked}
              onChange={e => handleTextSectionChange(setSecordPartHelper, 'lastName', e)}
              badgeTitle="Nachname"
              badgeEqualsPlaceholder
            />
          </InputColumnLayout>
          <InputColumnLayout ratio="1fr 2fr" style={{ marginBottom: '0px' }}>
            <TextField
              defaultValue={secondPart && secondPart.phoneFirstPart}
              type="tel"
              // onClick={secondPartClicked}
              onChange={e => handleTextSectionChange(setSecordPartHelper, 'phoneFirstPart', e)}
              badgeTitle="Vorwahl"
              badgeEqualsPlaceholder
            />
            <TextField
              defaultValue={secondPart && secondPart.phoneSecondPart}
              type="tel"
              // onClick={secondPartClicked}
              onChange={e => handleTextSectionChange(setSecordPartHelper, 'phoneSecondPart', e)}
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
              disabled={!firstPartDefined || !secondPartDefined}
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
