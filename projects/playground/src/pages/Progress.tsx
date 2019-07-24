import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import SubPage from '../components/SubPage';
import Title from '../components/Text/Title';
import LightSubTitle from '../components/Text/LightSubTitle';
import Text from '../components/Text';
import SOSMessage from '../components/SOSMessage';
import Divider from '../components/Divider';
import VerticalProgressView from '../components/VerticalProgressView';

const SOSMessageStyles = styled.div`
  &>* {
    padding-top: 0;
  }
`;

export default () => {
  const progressItems = [
    'Ihre Beauftragung',
    'Auftrag wird bearbeitet',
    'Suche nach ADAC Schlüsselnotdienst in Ihrer Nähe',
    'Helfer fährt los',
  ];

  const [progress, setProgress] = useState(1);

  const progressThisManyTimes = 3;
  const [hasProgressedThisManyTimes, setHasProgressedThisManyTimes] = useState(1);

  useEffect(() => {
    if (hasProgressedThisManyTimes > progressThisManyTimes) return;
    setTimeout(() => {
      setHasProgressedThisManyTimes(hasProgressedThisManyTimes + 1);
      setProgress(progress+1);
    }, 1000);
  }, [progress]);

  return (
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
      <Divider />
      <SubPage>
        <VerticalProgressView
          progress={progress}
          items={progressItems}
        />
      </SubPage>
    </Page>
  );
};