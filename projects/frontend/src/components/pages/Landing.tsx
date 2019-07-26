import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Page,
  SubPage,
  Title,
  SubTitle,
  Button,
  Text,
  Divider,
  TableView,
  FullWidthLayout,
  Image,
} from '@finnoconsult/core-view';

// import FireDepartment from '../svgs/FireDepartment';
// import Prices from '../svgs/Prices';
// import Conditions from '../svgs/Conditions';
import prices from '../static/mobile/content/landing-prices.svg';
import fireDepartment from '../static/mobile/content/landing-firedepartment.svg';
import conditions from '../static/mobile/content/landing-conditions.svg';

import Icon from '../ui/Icon';

const PhoneButtonViewStyles = styled.div``;

const Marginizer = styled.div`
  &>* {
    margin-bottom: 20px;
  }
`;

interface PhoneButtonViewProps {
  phoneNumber: string;
}

const PhoneButtonView = ({ phoneNumber }: PhoneButtonViewProps) => (
  <PhoneButtonViewStyles>
    <SubTitle>{phoneNumber}</SubTitle>
  </PhoneButtonViewStyles>
);

const PhoneButtonStyles = styled.div`
  &>${SubTitle} {
    margin-bottom: 10px;
  }
  &>${FullWidthLayout} {
    margin-bottom: 24px;
  }
`;

interface PhoneButtonProps {
  title: string;
  phoneNumber: string;
}

const PhoneButton = ({ title, phoneNumber }: PhoneButtonProps) => (
  <PhoneButtonStyles>
    <SubTitle>{title}</SubTitle>
    <FullWidthLayout>
      <Button info>
        <PhoneButtonView phoneNumber={phoneNumber} />
      </Button>
    </FullWidthLayout>
  </PhoneButtonStyles>
);

export default () => {
  const [isFireDeptOpen, setFireDeptOpen] = useState(true);

  return (
    <Page>
      <SubPage>
        <Title>Ihr ADAC Schlüsselnotdienst in Berlin, Hamburg und München </Title>
      </SubPage>


      <SubPage>
        {/* <SubTitle>Berlin, Hamburg und München </SubTitle> */}

        <Marginizer>
          <Image className="fullWidth" source={prices} />
          <Title>Wir sind von 0–24 Uhr für Sie da!</Title>
          <Image className="fullWidth" source={conditions} />
        </Marginizer>
      </SubPage>

      {isFireDeptOpen && (
        <Button onClick={() => setFireDeptOpen(false)}>
          <Image className="fullWidth" source={fireDepartment} />
        </Button>
      )}

      <SubPage>
        <FullWidthLayout style={{ marginBottom: '30px' }}>
          <Button title="Schlüsselnotdienst anfordern" cta link="/address" />
        </FullWidthLayout>

        <Marginizer>
          <Text>Lieber telefonisch anfragen?</Text>
        </Marginizer>
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
            { title: 'Öffnet der ADAC Schlüsselnotdienst auch Autotüren?', description: 'Die Gelben Engel öffnen Ihnen in Einzelfällen auch Ihre Autotür. Dies fällt beim ADAC in den Bereich Pannenhilfe und wird nur Mitgliedern angeboten – wenden Sie sich daher in einem solchen Fall bitte an die 22 22 22 oder melden Sie Ihre Panne ganz bequem hier. Der ADAC Schlüsselnotdienst öffnet Ihre Wohnungs-, Einfamilienhaus-, Reihenhaus- oder Doppelhaus-Tür.' },
            { title: 'Was unterscheidet einen Schlüsselnotdienst von einem Schlüsseldienst?', description: 'Der Schlüsselnotdienst kümmert sich ausschließlich um die Öffnung von Wohnungstüren, ein Schlüsseldienst übernimmt auch Montagearbeiten und Beratung.' },
            { title: 'Warum nur in Berlin, Hamburg und München?', description: 'Weil Erfahrungen und Anpassungen im Testlauf durch die Nähe zur ADAC Zentrale schnell und flexibel umgesetzt werden können.' },
            { title: 'Wie lange muss ich warten?', description: 'Wir bemühen uns, so schnell wie möglich bei Ihnen zu sein. Die Wartezeit kann je nach Auftragslage und Verkehrssituation variieren.' },
          ]}
          firstOpen
          rightView={<Icon name="down" />}
          rotateRightViewOnOpenClose
        />
      </SubPage>
    </Page>
  );
};
