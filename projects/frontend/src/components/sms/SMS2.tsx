import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';
import { Link } from 'react-router-dom';

export default () => (
  <SMS animated>
    <SMSText>
      Vielen Dank für Ihren Auftrag.
      Ihre Auftragsnummer: MUC-123123
    </SMSText>
    <br />
    <SMSText>
      Über diesen Link können Sie den aktuellen Status verfolgen:
    </SMSText>
    <Link to="/progress"><SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink></Link>
    <br />
    <br />
    <SMSText>
      Wir informieren Sie ausserdem laufend per SMS.
    </SMSText>
  </SMS>
);
