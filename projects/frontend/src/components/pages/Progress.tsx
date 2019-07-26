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
  Image,
} from '@finnoconsult/core-view';

import SMS3 from '../sms/SMS3';
import { Icon } from '../ui';
import { Link } from 'react-router-dom';

const SOSMessageStyles = styled.div`
  &>* {
    padding-top: 0;
  }
`;

const StatusIcon = styled.span`
  #pending-circle {
    transform-origin: 13.4px 13.4px ;
    animation: roate-circle 3s linear infinite;
  }
  @keyframes roate-circle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
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
      <StatusIcon>
        <Icon name={iconName(progress, index)} color={progress>index ? 'progress' : ''} />
      </StatusIcon>
    )
  };

  const stepConfig = [
    { title: 'Ihre Beauftragung', content: null },
    { title: 'Auftrag wird bearbeitet', content: <Image source={'/assets/images/static/mobile/furley2.gif'} className="fullWidth" />, },
    { title: 'Suche nach ADAC Schlüsselnotdienst in Ihrer Nähe', content: <Image source={'/assets/images/static/mobile/house_1x.gif'} className="fullWidth" />, },
    { title: <Link to="/progress/ontheway">Helfer fährt los</Link>, content: <Image source={'/assets/images/static/mobile/service-prov_1x.gif'} className="fullWidth" />, },
  ];

  const progressItems = stepConfig.map(({title}, index) => (
    { icon: <ProgressIcon progress={progress} index={index} />, title }
  ));

  const progressThisManyTimes = 3;
  const [hasProgressedThisManyTimes, setHasProgressedThisManyTimes] = useState(1);

  const [smsArrived, setSMSArrived] = useState(false);

  useEffect(() => {
    if (hasProgressedThisManyTimes > progressThisManyTimes) return;
    setTimeout(() => {
      setHasProgressedThisManyTimes(hasProgressedThisManyTimes + 1);
      setProgress(progress+1);
    }, 5000);
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
      {/* {smsArrived && '<SMS3 />'} */}
      {smsArrived && <SMS3 />}
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

      {stepConfig[progress] && stepConfig[progress].content}
      {progress >= stepConfig.length && <Image source={'/assets/images/static/mobile/05_stage4.png'} className="fullWidth" link="/progress/ontheway" />}
    </Page>
  );
};
