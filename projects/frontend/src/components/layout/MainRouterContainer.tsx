import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import Address from '../pages/Address';
import AddressDone from '../pages/AddressDone';
import AddressSMS from '../pages/AddressSMS';
import Progress from '../pages/Progress';
import HelpOnTheWay from '../pages/HelpOnTheWay';
import GoogleSearch from '../pages/GoogleSearch';
import Documents from '../pages/Documents';
import ProgressReport from '../pages/ProgressReport';

export default function MainRouterContainer(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={GoogleSearch} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/address" exact component={Address} />
      <Route path="/address/sms" exact component={AddressSMS} />
      <Route path="/address/done" exact component={AddressDone} />
      <Route path="/progress" exact component={Progress} />
      <Route path="/progress/ontheway" exact component={HelpOnTheWay} />
      <Route path="/documents/reports/progress" exact component={ProgressReport} />
      <Route path="/documents" component={Documents} />
    </Switch>
  );
}
