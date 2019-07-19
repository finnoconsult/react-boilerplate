import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element | string;
}

// TODO: implement auth check
const Security = ({ children }: Props) => (
  <>
    {children}
  </>
);

export default Security;
