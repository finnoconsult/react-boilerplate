import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';

export default () => (
  <SMS animated link="/progress" dismissDisabled>
    <SMSText>
      Vielen Dank für Ihren Auftrag.
      Ihre Auftragsnummer: MUC-123123
    </SMSText>
    <br />
    <SMSText>
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
