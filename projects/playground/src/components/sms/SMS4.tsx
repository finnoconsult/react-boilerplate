import React from 'react';

import SMS, { SMSText, SMSLink } from '../SMS';

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

    <SMSLink href="">http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
