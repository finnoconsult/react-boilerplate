import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';
import { Icon } from '../ui';

export default ({ onClick }: { onClick: () => void }) => (
  <SMS animated icon={<Icon name="message" />} onClick={onClick} dismissDisabled>
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
