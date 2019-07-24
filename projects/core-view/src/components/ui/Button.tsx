import React from 'react';
import {
  // withRouter,
  Link,
} from 'react-router-dom';

// import Link from './LinkStyle';

// import ContainerWithRouter from '../../../../containers/ContainerWithRouter';

// import styles from '../../../../theme/app.global.scss';

import { Children } from '../../types';

interface Props {
  children?: Children;
  to?: string;
  title?: string;
  className?: string;
  style?: {};
  disabled?: boolean;
  onClick?: () => void;
  // onClick?: ({ event }) => void,
}

// @withRouter
// export default class Button extends ContainerWithRouter {
export const Button = /*withRouter(*/(props: Props) => {
  const {
    onClick,
    to,
    children,
    // title,
    // className,
    // style,
    // disabled,
  } = props;

  const link = to;

  const handleClick = () => {
  // const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(
        // {
        // event: e,
        // history: history,
        // location: location,
        // match: match,
      // }
      );
    } else console.log(`TODO: goto ${to}`);
    // } else this.goTo(to);
  };


  if (link) {
    return (
      <Link
        // title={title}
        // className={className}
        // style={style || {}}
        // disabled={disabled}
        to={link || '/'}
      >
        {children}
      </Link>
    );
  }

  return (
    <button {...props} onClick={() => handleClick()}>
      {/* <Button {...props} onClick={e => handleClick(e)}> */}
      {children}
    </button>
  );
}/*)*/;

export default Button;
