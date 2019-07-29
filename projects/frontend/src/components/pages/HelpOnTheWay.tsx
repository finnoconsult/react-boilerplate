import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

import {
  Page,
  SubPage,
  Text,
  Title,
  SubTitle,
  LightSubTitle,
  TableView,
  Image,
  MockupNotification,
} from '@finnoconsult/core-view';

import Icon from '../ui/Icon';

import SMS4 from '../sms/SMS4';
import SMS5 from '../sms/SMS5';

const CustomSubtitle = styled(SubTitle)`
  font-weight: normal;
  margin-top: 10px;
`;

const OrderViewStyles = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 8px;

  text-align: center;
  display: grid;
  place-items: center;

  background-color: ${props => props.theme.colors.backgroundDark};
`;

const OrderText = styled(Text)`
  color: ${props => props.theme.colors.background};
  font-weight: bold;
  font-family: ${props => props.theme.font.face.bold.default};
  font-size: 12px;
`;

const OrderView = ({ index }: { index: number }) => (
  <OrderViewStyles>
    <OrderText>{index}</OrderText>
  </OrderViewStyles>
);

let wait30TimerID: number;

export default () => {
  const [timeUntil30, setTimeUntil30] = useState(45000);
  const [paused, setPaused] = useState(false);
  const [youHaveWaited30, setYouHaveWaited30] = useState(false);
  const [helpComingSMSArrived, setHelpComingSMSArrived] = useState(false);
  const [helperArrived, setHelperArrived] = useState(false);
  const [documentsSMSArrived, setDocumentsSMSArrived] = useState(false);

  const elapsedTimeContainer = useRef(0);
  const lastTimeStoppedContainer = useRef((new Date()).getTime());
  const doneWaitingContainer = useRef(false);

  function shouldIncrementTimeUntil30() {
    if (youHaveWaited30) return;
    if (doneWaitingContainer.current) return;
    if (paused) return;

    const newTime = timeUntil30 + 20000;
    console.log('incrementing', newTime);
    if (newTime >= 5 * 60 * 1000) return;
    setTimeUntil30(newTime);
  }

  function pauseWaiting() {
    // console.log('pause');
    setPaused(true);
  }

  function continueWaiting() {
    // console.log('play');
    lastTimeStoppedContainer.current = (new Date()).getTime();
    setPaused(false);
  }

  useEffect(() => {
    const currentTime = (new Date()).getTime();
    elapsedTimeContainer.current += currentTime - lastTimeStoppedContainer.current;
    lastTimeStoppedContainer.current = currentTime;

    clearTimeout(wait30TimerID);

    if (paused) return;
    const time = timeUntil30 - elapsedTimeContainer.current;
    if (time < 0) return;

    wait30TimerID = setTimeout(() => {
      setYouHaveWaited30(true);
    }, time);
  }, [timeUntil30, paused]);

  function youHaveWaited30Clicked() {
    doneWaitingContainer.current = true;
    setYouHaveWaited30(false);
    setHelpComingSMSArrived(true);
  }

  function helpShouldArrive() {
    setHelpComingSMSArrived(false);
    setTimeout(() => {
      setHelperArrived(true);
      setTimeout(() => {
        setDocumentsSMSArrived(true);
      }, 5000);
    }, 1000);
  }

  const titles = (
    <>
      <Title>{helperArrived ? 'Ihr Helfer ist da!' : 'Hilfe ist unterwegs'}</Title>
      <LightSubTitle>Auftragsnr. MUC-123123 </LightSubTitle>
    </>
  );

  enum PlayState {
    pause,
    play,
  }

  const videoProps = {
    width: '100%',
    height: 'auto',
    // https://developers.google.com/youtube/player_parameters
    playerVars: {
      autoplay: PlayState.pause,
      controls: PlayState.pause,
      disablekb: PlayState.pause,
    },
  };


  return (
    <Page>
      {helpComingSMSArrived && <SMS4 onClick={helpShouldArrive} />}
      {documentsSMSArrived && <SMS5 />}

      {youHaveWaited30 && !helpComingSMSArrived && (
        <MockupNotification onClick={youHaveWaited30Clicked}>
          <Title>Test</Title>
          <Text>Sie haben in der Zwischenzeit 30 Minuten gewartet.</Text>
          <Title>Test</Title>
        </MockupNotification>
      )}

      {helperArrived
        ? (
          <>
            <SubPage>
              {titles}
              <CustomSubtitle>Ihr Helfer ist angekommen und wird gleich bei Ihnen sein.</CustomSubtitle>
            </SubPage>
            <Image source="/assets/images/static/mobile/thomas-mayer.png" className="fullWidth" link="?coming-soon" />
          </>
        )
        : (
          <>
            <SubPage>
              {titles}
              <CustomSubtitle>
                Ankunft in
                {' '}
                <strong>ca. 35 Minuten</strong>
                <br />
              </CustomSubtitle>
              <CustomSubtitle>
                Bitte stellen Sie sicher, dass Sie telefonisch erreichbar sind.
              </CustomSubtitle>
            </SubPage>
            <Image source="/assets/images/static/mobile/adac-waiting-anim-only-looped.gif" className="fullWidth" />
            <Image source="/assets/images/static/mobile/thomas-approaching.png" className="fullWidth" link="?coming-soon" />
          </>
        )}

      <SubPage>
        <SubTitle big>So geht es nach der Ankunft weiter:</SubTitle>
        <TableView
          cellItems={[
            {
              title: 'Ihre Identität muss bestätigt werden',
              description: 'Um Missbrauch vorzubeugen, müssen wir sicherstellen, dass es sich tatsächlich um Ihre Wohnung handelt. Deshalb bitten wir Sie, Ihre Ausweispapiere spätestens nach der Öffnung vorzuzeigen.',
            },
            {
              title: 'Bestehende Schäden werden dokumentiert',
              description: 'Transparenz ist unser oberstes Gebot. Falls die Tür bereits Beschädigungen aufweist, werden wir diese fotografieren und dokumentieren.',
            },
            {
              title: 'Der Helfer öffnet Ihre Tür',
              description: (
                <>
                  <Text>
                    Wie lange es dauern wird um Ihre Tür zu öffnen, ist situationsabhängig und kann erst
                    <strong>vor Ort durch den Helfer eingeschätzt</strong>
                    werden.
                  </Text>
                  <YouTube
                    onPause={continueWaiting}
                    videoId="tsPgP6e6YxU"
                    opts={videoProps}
                    onReady={() => console.log('video loaded!')}
                    onPlay={pauseWaiting}
                    onEnd={() => console.log('video finished!')}
                  />
                  <Text>In nahezu allen Fällen öffnen wir die Türen ohne Beschädigung von Tür, Rahmen oder Schloss. In Einzelfällen muss das Schloss aufgebohrt werden. Im Falle einer unausweichlichen Beschädigung werden wir Sie ausdrücklich darauf hinweisen und erst nach Ihrer Zustimmung weiter verfahren.</Text>
                </>
              ),
            },
            {
              title: 'Nach Abschluss erhalten Sie sofort Ihre Rechnung aufs Handy',
              description: 'Ihre Rechnung erhalten Sie mit Abschluss der Arbeit elektronisch direkt als PDF zugestellt.',
            },
          ]}
          rightView={<Icon name="down" />}
          rotateRightViewOnOpenClose
          orderView={(index: number) => <OrderView index={index+1} />}
          onClick={shouldIncrementTimeUntil30}
        />
      </SubPage>
    </Page>
  );
};
