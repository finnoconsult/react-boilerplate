import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';
import { Icon } from '../ui';

export default () => (
  <SMS animated link="/progress" dismissDisabled icon={<Icon name="message" />}>
    <SMSText>
      Vielen Dank für Ihren Auftrag.
      <br />
      Ihre Auftragsnummer: MUC-123123
      <br />
      Über diesen Link können Sie den aktuellen Status verfolgen:
    </SMSText>
    <SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
    <br />
    <br />
    <SMSText>
      Wir informieren Sie ausserdem laufend per SMS.
    </SMSText>
  </SMS>
);
