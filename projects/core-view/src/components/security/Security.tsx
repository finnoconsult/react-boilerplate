import React from 'react';

import { Children } from '../../types';

interface Props {
  children: Children;
}

// TODO: implement auth check
const Security = ({ children }: Props) => (
  <>
    {children}
  </>
);

export default Security;
