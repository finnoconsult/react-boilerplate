import React from 'react';
import styled from 'styled-components';

import HorizontalProgressView from '../components/HorizontalProgressView';
import Page from '../components/Page';
import SubPage from '../components/SubPage';
import Title from '../components/Text/Title';
import Text from '../components/Text';
import { FullWidthLayout } from '../components/layouts';
import Button from '../components/Button';
import SOSMessage from '../components/SOSMessage';
import Link from '../components/Link';

const Question = styled(Text)`
  text-align: center;
  margin-bottom: 16px;
`;

const WarningText = styled(Text)`
  font-size: 2.4rem;
`;

export default () => (
  <Page>
    <HorizontalProgressView
      items={[
        'Adresse',
        'Handy-Nummer bestätigen',
        'Beauftragen',
      ]}
      progress={1}
    />
    <SubPage>
      <Title>Handy-Nummer bestätigen</Title>
    </SubPage>
    <SOSMessage grey auxView={<Link href="/">Nummer ändern</Link>}>
      <WarningText>
        Wir haben eine SMS an
        <strong> 0172 123 123 </strong>
geschickt. Bitte folgen Sie den Anweisungen.
      </WarningText>
    </SOSMessage>
    <SubPage>
      <FullWidthLayout>
        <Question>SMS nicht angekommen?</Question>
        <Button title="SMS erneut senden" />
      </FullWidthLayout>
    </SubPage>
  </Page>
);
