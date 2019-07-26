import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';

export default () => (
  <SMS animated link="/documents">
    <SMSText>
      Ihr Tätigkeitsbericht zur Auftragsnr. MUC-123123
    </SMSText>
    <br />
    <SMSText>
      Sie können das Dokument über diesen Link aufrufen:
    </SMSText>
    <br />

    <SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
