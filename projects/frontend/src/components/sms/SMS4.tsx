import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';

export default () => (
  <SMS animated>
    <SMSText>
      Ihr Helfer wird in ca. 5 Minuten bei Ihnen eintreffen.
    </SMSText>
    <br />
    <SMSText>
      Über diesen Link können Sie den aktuellen Status verfolgen:
    </SMSText>
    <br />

    <SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
