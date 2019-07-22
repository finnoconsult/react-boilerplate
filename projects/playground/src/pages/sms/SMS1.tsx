import React from 'react';

import SMS, { SMSText, SMSLink } from '../../components/SMS';

export default () => (
  <SMS>
    <SMSText>
      Willkommen beim ADAC Schlüsselnotdienst.
      Bitte öffnen Sie den Link, um Ihre Handy-Nummer zu bestätigen.
    </SMSText>
    <SMSLink href="">http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
