import React from 'react';

import Button from '../ui/Button';
import { DialogStyle, DialogContentStyle } from '../layout/DialogStyle';
// import { SMSStyles } from './SMS';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  onClick: () => void;
}

export default ({ children, onClick }: Props) => (
  <DialogStyle open column center style={{ padding: '16px' }}>
    <DialogContentStyle center style={{ height: '30vh' }}>
      <Button onClick={onClick}>
        {children}
      </Button>
    </DialogContentStyle>
  </DialogStyle>
);
