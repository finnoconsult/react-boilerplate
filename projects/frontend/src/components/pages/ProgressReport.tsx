import React from 'react';
// import styled from 'styled-components';

import {
  Image,
  Page,
} from '@finnoconsult/core-view';

import progressReport from '../static/mobile/content/service-provider-sample.png';

export default () => (
  <Page>
    <Image source={progressReport} className="fullWidth" link="/documents/invoice" />
  </Page>
);
