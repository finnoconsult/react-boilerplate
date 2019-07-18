import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WelcomePage from '../pages/WelcomePage';

export default function MainRouterContainer(): JSX.Element {
  return (
    <Router>
      <Route path="/" exact component={WelcomePage} />
    </Router>
  );
}
