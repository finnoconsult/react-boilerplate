import React from 'react';
import { Icon as PureIcon, IconProps, getIcon } from '@finnoconsult/core-view';
import { iconsGenerated } from '../../content';

interface TypedIconProps extends IconProps {
  type?: string;
}

export const Icon = (props: (TypedIconProps)) => {
  const {
    name, type,
  } = props;

  const source = getIcon(iconsGenerated, name, type);

  return (
    <PureIcon {...props} source={source} />
  );
};

export default Icon;
