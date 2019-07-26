import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  Page,
  SubPage,
  Title,
  LightSubTitle,
  Text,
  SOSMessage,
  Divider,
  VerticalProgressView,
} from '@finnoconsult/core-view';

// import SMS3 from '../sms/SMS3';
import { Icon } from '../ui';

const SOSMessageStyles = styled.div`
  &>* {
    padding-top: 0;
  }
`;

export default () => {
  const [progress, setProgress] = useState(1);

  const ProgressIcon = ({ progress, index }: { progress: number, index: number }) => {
    const iconName = (progress: number, index: number): string => {
      if (progress < index) return 'lock-closed';
      if (progress > index) return 'lock-open';
      return 'lock-pending'
    }
    return (
      <Icon name={iconName(progress, index)} color={progress>index ? 'progress' : ''} />
    )
  };

  const progressItems = [
    { icon: <ProgressIcon progress={progress} index={0} />, title: 'Ihre Beauftragung' },
    { icon: <ProgressIcon progress={progress} index={1} />, title: 'Auftrag wird bearbeitet' },
    { icon: <ProgressIcon progress={progress} index={progress} />, title: 'Suche nach ADAC Schlüsselnotdienst in Ihrer Nähe' },
    { icon: <ProgressIcon progress={progress} index={3} />, title: 'Helfer fährt los' },
  ];


  const progressThisManyTimes = 3;
  const [hasProgressedThisManyTimes, setHasProgressedThisManyTimes] = useState(1);

  const [smsArrived, setSMSArrived] = useState(false);

  useEffect(() => {
    if (hasProgressedThisManyTimes > progressThisManyTimes) return;
    setTimeout(() => {
      setHasProgressedThisManyTimes(hasProgressedThisManyTimes + 1);
      setProgress(progress+1);
    }, 2000);
  }, [progress, hasProgressedThisManyTimes]);

  useEffect(() => {
    if (progressThisManyTimes < hasProgressedThisManyTimes) {
      setTimeout(() => {
        setSMSArrived(true);
      }, 1000);
    }
  }, [hasProgressedThisManyTimes]);

  return (
    <Page>
      {smsArrived && '<SMS3 />'}
      {/* {smsArrived && <SMS3 />} */}
      <SubPage>
        <Title>Danke für Ihren Auftrag</Title>
        <LightSubTitle>Auftragsnr. MUC-123123 </LightSubTitle>
      </SubPage>
      <SOSMessageStyles>
        <SOSMessage>
          <Icon name="sms" />
          <Text paddingLeft="10px">
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
