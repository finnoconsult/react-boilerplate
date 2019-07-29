import React, { useState, useEffect } from 'react';
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
  font-size: 12px;
`;

const OrderView = ({ index }: { index: number }) => (
  <OrderViewStyles>
    <OrderText>{index}</OrderText>
  </OrderViewStyles>
);

export default () => {
  const [helperArrived, setHelperArrived] = useState(false);
  const [helpComingSMSArrived, setHelpComingSMSArrived] = useState(false);
  const [documentsSMSArrived, setDocumentsSMSArrived] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setHelpComingSMSArrived(true);
    }, 10000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setHelperArrived(true);
      // setHelpComingSMSArrived(true);
    }, 15000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDocumentsSMSArrived(true);
    }, 20000);
  }, []);


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
    playerVars: {
      autoplay: PlayState.pause,
    },
  };


  return (
    <Page>
      {helpComingSMSArrived && <SMS4 />}
      {documentsSMSArrived && <SMS5 />}

      {helperArrived
        ? (
          <>
            <SubPage>
              {titles}
              <CustomSubtitle>Ihr Helfer ist angekommen und wird gleich bei Ihnen sein.</CustomSubtitle>
            </SubPage>
            <Image source="/assets/images/static/mobile/thomas-mayer.png" className="fullWidth" />
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
            <Image source="/assets/images/static/mobile/thomas-approaching.png" className="fullWidth" />
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
                    videoId="fyqPbjrYoCI"
                    opts={videoProps}
                    onReady={() => console.log('video READY!')}
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
        />
      </SubPage>
    </Page>
  );
};
