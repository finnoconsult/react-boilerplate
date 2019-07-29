import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Page,
  SubPage,
  Title,
  Text,
  Button,
  FullWidthLayout,
  CheckBoxGroup,
  Image,
  SubTitle,
} from '@finnoconsult/core-view';

// import Offer from '../svgs/Offer';

import { Link } from 'react-router-dom';
import SMS2 from '../sms/SMS2';
import { Icon } from '../ui';
import AddressSubMenu from './AddressSubMenu';

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
      <AddressSubMenu progress={2} />
      <SubPage>
        <Title>
Danke für Ihr Vertrauen,
          <br />
Herr Max Muster
        </Title>
        <AddressTextLayout>
          <SubTitle>Einsatzadresse: </SubTitle>
          <Text>
Landwehrstraße 67, 80331 München
            {' '}
            <Link to="?coming-soon"><Icon name="edit" /></Link>
          </Text>
        </AddressTextLayout>
      </SubPage>

      {/* <Offer /> */}
      <Image source="/assets/images/static/mobile/address-done-user-offer.png" className="fullWidth" />

      <SubPage>
        <CheckBoxGroup
          name="agreement"
          items={[
            {
              title: (
                <>
                  Ich stimme den
                  {' '}
                  <Link to="?coming-soon"><strong><u>AGBs</u></strong></Link>
                  {' '}
                  zu
                </>
              ),
              value: 'agb',
            },
            {
              title: (
                <>
                  Ich verzichte auf das
                  {' '}
                  <Link to="?coming-soon"><strong><u>Widerrufsrecht</u></strong></Link>
                </>
              ),
              value: 'widerrufsrecht',
            },
            {
              title: (
                <>
                  Ich stimme den Richlinien gemäß der
                  {' '}
                  <Link to="?coming-soon"><strong><u>DSGVO</u></strong></Link>
                  {' '}
                  zu
                </>
              ),
              value: 'dsgvo',
            },
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
