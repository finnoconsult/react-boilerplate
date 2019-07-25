import React from 'react';

import SMS, { SMSText, SMSLink } from '../SMS';

export default () => (
  <SMS animated>
    <SMSText>Hallo Max,</SMSText>
    <br />
    <SMSText>
      Willkommen beim ADAC Schlüsselnotdienst.
      Bitte öffnen Sie den Link, um Ihre Handy-Nummer zu bestätigen.
    </SMSText>
    <SMSLink href="">http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
  </SMS>
);
