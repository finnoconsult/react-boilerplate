import React from 'react';
import { Icon } from '../components/ui/Icon';

export const links = {
  nav: [
    {
      id: '',
      // title: 'Welcome',
      route: '/',
      image: <Icon name="phone" />,
    },
    {
      id: '',
      title: 'Lorem',
      image: <Icon name="disks" />,
      route: '/lorem',
    },
    {
      id: '',
      title: 'Sample',
      route: '/sample',
    },
    {
      id: '',
      title: 'console',
      onClick: () => console.log('test console'),
    },
  ],
};
