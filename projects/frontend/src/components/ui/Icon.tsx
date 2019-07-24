import React from 'react';
import { Icon as PureIcon, IconProps, getIcon } from '@finnoconsult/core-view';
import { iconsGenerated } from '../../content';

// import TempSource from '../../theme/images/jsx/back.jsx.svg';

export const Icon = (props: (IconProps)) => {
  const {
    name,
  } = props;

  const source = getIcon(iconsGenerated, name);

  console.log('source', iconsGenerated, name, source);

  return (
    <>
    <PureIcon {...props} name="//TODO" />
    {/* <TempSource /> */}
    </>
  );
}

export default Icon;
