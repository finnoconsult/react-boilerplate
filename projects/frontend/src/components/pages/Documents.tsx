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
    </SubPage>
    <SubPage>
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
        <Title>Dokumente per E-Mail erhalten</Title>
        <TextField
          badgeTitle="E-Mail"
          badgeEqualsPlaceholder
          defaultValue="max@muster.de"
        />
        <Button info title="Fertig" />
      </FormLayout>
    </SubPage>
  </Page>
);
