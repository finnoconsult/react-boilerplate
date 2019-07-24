import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import SubPage from '../components/SubPage';
import { Title, LightSubTitle, SubTitle } from '../components/Text';
import TableView from '../components/TableView';

const MarginizedSubtitle = styled(SubTitle)`
  margin-top: 17px;
`;

export default () => (
  <Page>
    <SubPage>
      <Title>Hilfe ist unterwegs</Title>
      <LightSubTitle>Auftragsnr. MUC-123123 </LightSubTitle>
      <MarginizedSubtitle>Ankunft in ca. 35 Minuten</MarginizedSubtitle>
    </SubPage>

    <SubPage>
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
