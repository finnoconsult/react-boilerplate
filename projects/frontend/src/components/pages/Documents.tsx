import React, { useState, useEffect, useContext } from 'react';
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
  useLocation,
} from '@finnoconsult/core-view';
import StoreContext from '../../stores';


import Icon from '../ui/Icon';
import SMS6 from '../sms/SMS6';

const FormLayout = styled.div`
  &>* {
    margin-bottom: 18px;
  }
`;

export default () => {
  const [invoiceArrived, setInvoiceArrived] = useState(false);
  const location = useLocation();
  const { pathname: currentRoute } = location;

  const hasInvoice = invoiceArrived || currentRoute.match(/invoice/);

  useEffect(() => {
    setTimeout(() => {
      setInvoiceArrived(true);
    }, 20000);
  }, []);

  const stores = useContext(StoreContext);

  function showOverlay() {
    stores.ui.setShowOverlay(true);
  }

  const items = [
    { title: 'Tätigkeitsbericht', description: '', link: '/documents/reports/progress' },
  ].concat(
    hasInvoice ? { title: 'Ihre Rechnung', description: '', link: '?coming-soon' } : [],
  );

  return (
    <Page>
      {hasInvoice && <SMS6 />}

      <SubPage>
        <Title>Dokumente und Rechnung</Title>
        <LightSubTitle>Auftragsnr. MUC-123123 · Datum 30.7.2019</LightSubTitle>

        <TableView
          disableOpening
          cellItems={items}
          rightView={<Icon name="right" />}
          orderView={() => <Icon name="document" color="#33a3dc" />}
        />
      </SubPage>
      <SubPage>
        <FormLayout>
          <SubTitle big>Dokumente per E-Mail erhalten</SubTitle>
          <InputColumnLayout ratio="7fr 3fr">
            <TextField
              name="email"
              type="email"
              readonly
              badgeTitle="E-Mail"
              badgeEqualsPlaceholder
              defaultValue="max@muster.de"
            />
            <Button cta title="Senden" />
          </InputColumnLayout>
          <Button info title="Fertig" onClick={showOverlay} link="/documents/rateus" />
        </FormLayout>
      </SubPage>
    </Page>
  );
};
