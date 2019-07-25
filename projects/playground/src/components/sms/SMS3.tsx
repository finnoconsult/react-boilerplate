import React from 'react';

import SMS, { SMSText, SMSLink } from '../SMS';

export default () => (
  <SMS animated>
    <SMSText>
      Hilfe ist unterwegs!
    </SMSText>
    <br />
    <SMSText>
      Ihr Helfer wird in ca. 35 Minuten bei Ihnen eintreffen.
    </SMSText>
    <br />
    <SMSText>
      Wir benachrichtigen Sie 5 Minuten vor Ankunft per SMS!
    </SMSText>
    <br />
    <SMSText>
      Über diesen Link können Sie den aktuellen Status verfolgen:
    </SMSText>
    <br />

    <SMSLink href="">http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
