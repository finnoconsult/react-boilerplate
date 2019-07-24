import React from 'react';
import { Icon as PureIcon, IconProps, getIcon } from '@finnoconsult/core-view';
import { iconsGenerated } from '../../content';

export const Icon = (props: (IconProps)) => {
  const {
    name,
  } = props;

  const source = getIcon(iconsGenerated, name);

  return (
    <PureIcon {...props} source={source} />
  );
}

export default Icon;
