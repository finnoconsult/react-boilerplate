import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';
import { Icon } from '../ui';

export default () => (
  <SMS animated link="/documents" dismissDisabled icon={<Icon name="message" />}>
    <SMSText>
      Ihre Beauftragung zur Türöffnung zur Auftragsnr. MUC-123123.
    </SMSText>
    <SMSText>
      Sie können das Dokument über diesen Link aufrufen:
    </SMSText>
    <br />

    <SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
