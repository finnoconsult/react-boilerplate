import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import SubPage from '../components/SubPage';
import Title from '../components/Text/Title';
import SubTitle from '../components/Text/SubTitle';
import Button from '../components/Button';
import Text from '../components/Text';
import Divider from '../components/Divider';
import TableView from '../components/TableView';

import { FullWidthLayout } from '../components/layouts';

const PhoneButtonViewStyles = styled.div``;

interface PhoneButtonViewProps {
  phoneNumber: string;
}

const PhoneButtonView = ({ phoneNumber }: PhoneButtonViewProps) => (
  <PhoneButtonViewStyles>
    <SubTitle>{phoneNumber}</SubTitle>
  </PhoneButtonViewStyles>
);

const PhoneButtonStyles = styled.div``;

interface PhoneButtonProps {
  title: string;
  phoneNumber: string;
}

const PhoneButton = ({ title, phoneNumber }: PhoneButtonProps) => (
  <PhoneButtonStyles>
    <SubTitle>{title}</SubTitle>
    <FullWidthLayout>
      <Button>
        <PhoneButtonView phoneNumber={phoneNumber} />
      </Button>
    </FullWidthLayout>
  </PhoneButtonStyles>
);

export default () => (
  <Page>
    <SubPage>
      <Title>Ihr ADAC Schlüsselnotdienst</Title>
      <SubTitle>Berlin, Hamburg und München </SubTitle>

      <Title>Wir sind von 0–24 Uhr für Sie da!</Title>
      <FullWidthLayout>
        <Button title="Schlüsselnotdienst anfordern" cta />
      </FullWidthLayout>

      <Text>Lieber telefonisch anfragen?</Text>
      <PhoneButton title="ADAC Berlin" phoneNumber="030 76 76 55 77" />
      <PhoneButton title="ADAC Hamburg" phoneNumber="040 76 76 55 77" />
      <PhoneButton title="ADAC München" phoneNumber="089 76 76 55 77" />
    </SubPage>
    <Divider fullWidth />
    <SubPage>
      <TableView
        title="FAQ"
        cellItems={[
          { title: 'Warum ein Schlüsselnotdienst?', description: 'Weil der ADAC bekannt dafür ist, seinen Mitgliedern im Notfall zu helfen – dies wird durch den Schlüsselnotdienst nun auch auf die Wohnungstür ausgeweitet. Der ADAC hilft Ihnen, schnell wieder in Ihre Wohnung oder Ihr Einfamilien-, Reihen-, Doppelhaus zu kommen.' },
          { title: 'Öffnet der ADAC Schlüsselnotdienst auch Autotüren?', description: '' },
          { title: 'Was unterscheidet einen Schlüsselnotdienst von einem Schlüsseldienst?', description: '' },
          { title: 'Warum nur in Berlin, Hamburg und München?', description: '' },
          { title: 'Wie lange muss ich warten?', description: '' },
        ]}
        firstOpen
      />
    </SubPage>
  </Page>
);
