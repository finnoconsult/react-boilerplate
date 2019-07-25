import React from 'react';

import {
  Page,
  Image,
} from '@finnoconsult/core-view';

import googleSearchContent1 from '../../images/google-search-content-1.png';
import googleSearchContent2 from '../../images/google-search-content-2.png';
import googleSearchContent3 from '../../images/google-search-content-3.png';
import googleSearchContent4 from '../../images/google-search-content-4.png';

export default () => {

  return (
    <Page>
      <Image source={googleSearchContent1} className="fullWidth" />
      <Image source={googleSearchContent2} className="fullWidth" />
      <Image source={googleSearchContent3} className="fullWidth" link="/landing" />
      <Image source={googleSearchContent4} className="fullWidth" />
    </Page>
  );
};
