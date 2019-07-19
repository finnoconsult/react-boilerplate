import React from 'react';
import { Route } from 'react-router-dom';

import WelcomePage from '../pages/WelcomePage';
import SamplePage from '../pages/SamplePage';
import LoremPage from '../pages/LoremPage';

export default function MainRouterContainer(): JSX.Element {
  return (
    <>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/sample" exact component={SamplePage} />
      <Route path="/lorem" exact component={LoremPage} />
    </>
  );
}
