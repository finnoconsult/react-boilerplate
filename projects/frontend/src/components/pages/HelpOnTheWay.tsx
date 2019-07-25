import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import {
  Page,
  SubPage,
  Title,
  SubTitle,
  LightSubTitle,
  TableView,
} from '@finnoconsult/core-view';

import SMS4 from '../sms/SMS4';

const CustomSubtitle = styled(SubTitle)`  
  font-weight: normal;
  margin-top: 17px;
`;

export default () => {
  const [helperArrived, setHelperArrived] = useState(false);
  const [smsArrived, setSMSArrived] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHelperArrived(true);
    }, 10000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSMSArrived(true);
    }, 4000);
  }, []);

  return (
    <Page>
      {smsArrived && <SMS4 />}
      <SubPage>
        <Title>{ helperArrived ? 'Ihr Helfer ist da!' : 'Hilfe ist unterwegs'}</Title>
        <LightSubTitle>Auftragsnr. MUC-123123 </LightSubTitle>
        {helperArrived
          ? <CustomSubtitle>Ihr Helfer ist angekommen und wird gleich bei Ihnen sein.</CustomSubtitle>
          : (
            <CustomSubtitle>
              Ankunft in
              {' '}
              <strong>ca. 35 Minuten</strong>
            </CustomSubtitle>
          )}
      </SubPage>

      <SubPage>
        <SubTitle>So geht es nach der Ankunft weiter:</SubTitle>
        <TableView cellItems={[
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
            description: 'Wie lange es dauern wird um Ihre Tür zu öffnen, ist situationsabhängig und kann erst vor Ort durch den Helfer eingeschätzt werden.',
          },
          {
            title: 'Nach Abschluss erhalten Sie sofort Ihre Rechnung aufs Handy',
            description: 'Ihre Rechnung erhalten Sie mit Abschluss der Arbeit elektronisch direkt als PDF zugestellt.',
          },
        ]}
        />
      </SubPage>
    </Page>
  );
};
