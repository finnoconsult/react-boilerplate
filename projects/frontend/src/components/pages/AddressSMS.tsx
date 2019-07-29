import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  Page,
  SubPage,
  Title,
  Button,
  Text,
  SOSMessage,
  FullWidthLayout,
} from '@finnoconsult/core-view';

// import HorizontalProgressView from '../components/HorizontalProgressView';
// import Page from '../components/Page';
// import SubPage from '../components/SubPage';
// import Title from '../components/Text/Title';
// import Text from '../components/Text';
// import { FullWidthLayout } from '../components/layouts';
// import Button from '../components/Button';
// import SOSMessage from '../components/SOSMessage';
// import Link from '../components/Link';

import SMS1 from '../sms/SMS1';
import { Icon } from '../ui';
import AddressSubMenu from './AddressSubMenu';

const Question = styled(Text)`
  text-align: center;
  margin-bottom: 16px;
`;

const WarningText = styled(Text)`
  font-size: ${props => props.theme.font.title};
  padding-left: 10px;
`;

export default () => {
  const [showSMS, setShowSMS] = useState(false);

  const getSMS = () => setTimeout(() => {
    console.log('get new sms');
    setShowSMS(true);
  }, 5000);

  useEffect(() => {
    getSMS();
  });
  return (
    <Page>
      {showSMS && <SMS1 />}
      <AddressSubMenu progress={1} />
      <SubPage>
        <Title>Handy-Nummer bestätigen</Title>
      </SubPage>
      <SOSMessage grey auxView={<Link to="/address">Nummer ändern</Link>}>
        <Icon name="sms" />
        <WarningText>
        Wir haben eine SMS an
          <strong> 0172 123 123 </strong>
geschickt. Bitte folgen Sie den Anweisungen.
        </WarningText>
      </SOSMessage>
      <SubPage>
        <FullWidthLayout>
          <Question>SMS nicht angekommen?</Question>
          {/* <Button onClick={() => getSMS()} title="SMS erneut senden" info /> */}
          <Button link={showSMS ? '/address/done' :''} title="SMS erneut senden" info />
        </FullWidthLayout>
      </SubPage>
    </Page>
  );
};
