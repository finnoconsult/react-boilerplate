import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';
import { Icon } from '../ui';

export default () => (
  <SMS animated link="/documents" icon={<Icon name="message" />}>
    <SMSText>
      Sehr geehrter Herr Max Muster, abschliessend erhalten Sie Ihre ADAC-Rechnung zur Auftragsnr. MUC-123123. Sie können das Dokument über diesen Link aufrufen:
    </SMSText>
    <SMSText>
      Sie können das Dokument über diesen Link aufrufen:
    </SMSText>
    <br />

    <SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
