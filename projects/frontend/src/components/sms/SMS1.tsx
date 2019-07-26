import React from 'react';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';

export default () => (
  <SMS animated link="/address/done" dismissDisabled>
    <SMSText>Hallo Max,</SMSText>
    <br />
    <SMSText>
      Willkommen beim ADAC Schlüsselnotdienst.
      Bitte öffnen Sie den Link, um Ihre Handy-Nummer zu bestätigen.
    </SMSText>
    <SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
