import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import SubPage from '../components/SubPage';
import Title from '../components/Text/Title';
import LightSubTitle from '../components/Text/LightSubTitle';
import Text from '../components/Text';
import SOSMessage from '../components/SOSMessage';

const SOSMessageStyles = styled.div`
  &>* {
    padding-top: 0;
  }
`;

export default () => (
  <Page>
    <SubPage>
      <Title>Danke für Ihren Auftrag</Title>
      <LightSubTitle>Auftragsnr. MUC-123123 </LightSubTitle>
    </SubPage>
    <SOSMessageStyles>
      <SOSMessage>
        <Text>
      Sobald der Helfer unterwegs ist, erhalten Sie eine Bestätigung per SMS -
          <strong> in ca. 5 Minuten </strong>
        </Text>
      </SOSMessage>
    </SOSMessageStyles>
  </Page>
);
