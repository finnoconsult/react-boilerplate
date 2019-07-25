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
} from '@finnoconsult/core-view';

import Offer from '../svgs/Offer';

import SMS2 from '../sms/SMS2';

const AddressTextLayout = styled.div`
  margin-top: 5px;
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
        <Title>Danke für Ihr Vertrauen, Herr Max Muster</Title>
        <AddressTextLayout>
          <Text>Einsatzadresse: </Text>
          <Text>Landwehrstraße 67, 80331 München</Text>
        </AddressTextLayout>
      </SubPage>
      <Offer />
      <SubPage>
        <CheckBoxGroup
          name="agreement"
          items={[
            { title: 'Ich verzichte auf das Widerrufsrecht', value: 'widerrufsrecht' },
            { title: 'Ich stimme den AGBs zu', value: 'agb' },
            { title: 'Ich stimme den Richlinien gemäß der DSGVO zu', value: 'dsgvo' },
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
