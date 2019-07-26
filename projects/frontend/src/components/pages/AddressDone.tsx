import React, { useState } from 'react';
import styled from 'styled-components';


import {
  Page,
  SubPage,
  Title,
  Text,
  Button,
  HorizontalProgressView,
  FullWidthLayout,
  CheckBoxGroup,
  Image,
  SubTitle,
} from '@finnoconsult/core-view';

// import Offer from '../svgs/Offer';

import SMS2 from '../sms/SMS2';
import { Link } from 'react-router-dom';
import { Icon } from '../ui';

const AddressTextLayout = styled.div`
  margin-top: 10px;
`;

export default () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [smsIncoming, setSMSIncoming] = useState(false);
  const [showSMS, setShowSMS] = useState(false);

  function sendSMS() {
    if (smsIncoming) return;
    setSMSIncoming(true);
    setTimeout(() => {
      setShowSMS(true);
    }, 1000);
  }

  return (
    <Page>
      {showSMS && <SMS2 />}
      <HorizontalProgressView
        items={[
          'Adresse',
          'Handy-Nummer bestätigen',
          'Beauftragen',
        ]}
        progress={2}
      />
      <SubPage>
        <Title>Danke für Ihr Vertrauen,<br />Herr Max Muster</Title>
        <AddressTextLayout>
          <SubTitle>Einsatzadresse: </SubTitle>
          <Text>Landwehrstraße 67, 80331 München <Link to="?coming-soon"><Icon name="edit" /></Link></Text>
        </AddressTextLayout>
      </SubPage>

      {/* <Offer /> */}
      <Image source="/assets/images/static/mobile/address-done-user-offer.png" className="fullWidth" />

      <SubPage>
        <CheckBoxGroup
          name="agreement"
          items={[
            {
              title: <>Ich verzichte auf das <strong><u>Widerrufsrecht</u></strong></>, value: 'widerrufsrecht' },
            { title: <>Ich stimme den <strong><u>AGBs</u></strong> zu</>, value: 'agb' },
            { title: <>Ich stimme den Richlinien gemäß der <strong><u>DSGVO</u></strong> zu</>, value: 'dsgvo' },
          ]}
          accepted={allAccepted => setTermsAccepted(allAccepted)}
        />
      </SubPage>
      <SubPage>
        <FullWidthLayout>
          <Button
            disabled={!termsAccepted}
            title="Auftrag bestätigen"
            cta
            onClick={sendSMS}
          />
        </FullWidthLayout>
      </SubPage>
    </Page>
  );
};
