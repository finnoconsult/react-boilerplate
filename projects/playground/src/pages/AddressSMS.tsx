import React from 'react';
import styled from 'styled-components';

import HorizontalProgressView from '../components/HorizontalProgressView';
import Page from '../components/Page';
import SubPage from '../components/SubPage';
import Title from '../components/Text/Title';
import Text from '../components/Text';
import { FullWidthLayout } from '../components/layouts';
import Button from '../components/Button';

const Question = styled(Text)`
  text-align: center;
  margin-bottom: 16px;
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
    {/* // TODO: Image */}
    <SubPage>
      <FullWidthLayout>
        <Question>SMS nicht angekommen?</Question>
        <Button title="SMS erneut senden" />
      </FullWidthLayout>
    </SubPage>
  </Page>
);
