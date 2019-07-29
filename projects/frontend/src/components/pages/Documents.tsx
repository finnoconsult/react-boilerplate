import React from 'react';
import styled from 'styled-components';

import {
  Page,
  SubPage,
  Title,
  LightSubTitle,
  TableView,
  TextField,
  Button,
  SubTitle,
  ColumnLayout as InputColumnLayout,
} from '@finnoconsult/core-view';

import Icon from '../ui/Icon';

const FormLayout = styled.div`
  &>* {
    margin-bottom: 18px;
  }
`;

export default () => (
  <Page>
    <SubPage>
      <Title>Dokumente und Rechnung</Title>
      <LightSubTitle>Auftragsnr. MUC-123123 · Datum 30.7.2019</LightSubTitle>

      <TableView
        disableOpening
        cellItems={[
          { title: 'Tätigkeitsbericht', description: '' },
          { title: 'Ihre Rechnung', description: '' },
        ]}
        rightView={<Icon name="right" />}
        orderView={() => <Icon name="document" color="#33a3dc" />}
      />
    </SubPage>
    <SubPage>
      <FormLayout>
        <SubTitle big>Dokumente per E-Mail erhalten</SubTitle>
        <InputColumnLayout ratio="7fr 3fr">
          <TextField
            badgeTitle="E-Mail"
            badgeEqualsPlaceholder
            defaultValue="max@muster.de"
          />
          <Button cta title="Senden" />
        </InputColumnLayout>
        <Button info title="Fertig" />
      </FormLayout>
    </SubPage>
  </Page>
);
