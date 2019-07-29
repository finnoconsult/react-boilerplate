import React from 'react';

import {
  SMS, SMSText, SMSLink, SMSTitle,
} from '@finnoconsult/core-view';
import { Icon } from '../ui';

export default () => (
  <SMS animated link="/address/done" dismissDisabled icon={<Icon name="message" />}>
    <SMSTitle>ADAC Schlüsselnotdienst</SMSTitle>
    <br />
    <SMSText>
      Hallo Max Muster, willkommen beim ADAC Schlüsselnotdienst.
      <br />
      Bitte öffnen Sie den Link, um Ihre Handy-Nummer zu bestätigen.
    </SMSText>
    <SMSLink>http://adac.de/schluesselnotdiest/yxc124ert</SMSLink>
    <SMSText>(Es handelt sich um eine automatische SMS. Bitte antworten Sie nicht darauf.)</SMSText>
  </SMS>
);
