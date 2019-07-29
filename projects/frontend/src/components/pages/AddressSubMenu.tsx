import React from 'react';
import { HorizontalProgressView } from '@finnoconsult/core-view';
import { Link } from 'react-router-dom';
import { Icon } from '../ui';

interface AddressSubMenuProps {
  progress: number;
}


export default function AddressSubMenu({ progress }: AddressSubMenuProps) {
  const items = [
    { link: '/address', title: 'Adresse' },
    { link: '/address/sms', title: 'Handy-Nummer bestätigen' },
    { link: '/address/done', title: 'Beauftragen' },
  ];
  return (
    <HorizontalProgressView
      separator={<Icon name="arrow-right" />}
      items={items.map(({ link, title }, index) => (
        // (link && progress > index) ? <Link key={link || title || `title${index}`} to={link}>{title}</Link> : title
        (link) ? <Link key={link || title || `title${index}`} to={link}>{title}</Link> : title
      ))}
      progress={progress}
    />
  );
}
