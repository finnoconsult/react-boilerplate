import React from 'react';

import Button from '../ui/Button';
import { SMSStyles } from './SMS';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  onClick: () => void;
}

export default ({ children, onClick }: Props) => (
  <SMSStyles>
    <Button onClick={onClick}>
      {children}
    </Button>
  </SMSStyles>
);
