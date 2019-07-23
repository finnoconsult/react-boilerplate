import React from 'react';
import styled from 'styled-components';

import HorizontalProgressView from '../components/HorizontalProgressView';
import Page from '../components/Page';
import SubPage from '../components/SubPage';
import Title from '../components/Text/Title';
import Text from '../components/Text';
import { FullWidthLayout } from '../components/layouts';
import Button from '../components/Button';

const AddressTextLayout = styled.div`
  margin-top: 5px;
`;

export default () => (
  <Page>
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
    <SubPage>
      <FullWidthLayout>
        <Button title="Auftrag bestätigen" cta />
      </FullWidthLayout>
    </SubPage>
  </Page>
);
