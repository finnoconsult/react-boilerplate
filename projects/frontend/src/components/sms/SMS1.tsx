import React from 'react';
import { Link } from 'react-router-dom';

import { SMS, SMSText, SMSLink } from '@finnoconsult/core-view';

export default () => (
  <SMS animated>
    <SMSText>Hallo Max,</SMSText>
    <br />
    <SMSText>
      Willkommen beim ADAC Schlüsselnotdienst.
      Bitte öffnen Sie den Link, um Ihre Handy-Nummer zu bestätigen.
    </SMSText>
    <Link to="/address/done"><SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink></Link>
  </SMS>
);
