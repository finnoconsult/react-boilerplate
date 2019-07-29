import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';
import { Icon } from '../ui';

export default () => (
  <SMS animated link="/progress/ontheway" dismissDisabled icon={<Icon name="message" />}>
    <SMSText>
      Hilfe ist unterwegs!
      Ihr Helfer wird in ca. 35 Minuten bei Ihnen eintreffen.
      Wir benachrichtigen Sie 5 Minuten vor Ankunft per SMS!
      <br />
      Über diesen Link können Sie den aktuellen Status verfolgen:
    </SMSText>
    <br />

    <SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
