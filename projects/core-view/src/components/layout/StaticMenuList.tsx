import React from 'react';
import styled from 'styled-components';
// import { Image, Text, View } from '../../../ui';
// import NavigationButton from './NavigationButton';

import { FlexFragment, Fragment } from '../Fragment';
import { View } from './View';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { Image } from '../ui/Image';

interface ItemProps {
  id: string | number;
  title?: string;
  route?: string;
  badge?: string | number;
  Component?: () => JSX.Element;
  image?: () => JSX.Element | string | undefined;
}

interface Props {
  items: ItemProps[];
  // className: string;
  // absolute: boolean;
  // location: { pathname: string};
}

// isMatching({ route, routeMatch, routeMatchExclude, index }) {
//   const pathnamePrefix = this.props.location.pathname.split('/').slice(0, 4).join('/');
//   const routePrefix = route.split('/').slice(0, 4).join('/');
//   // console.log('isMatching', pathnamePrefix, routePrefix, routeMatch, 'desktop:', this.props.location.pathname.match(routeMatch) !== null, 'mob:', (routePrefix !== '/' && routePrefix.match(new RegExp(`^${pathnamePrefix}$`, 'i')) && true));
//   if ((pathnamePrefix === '/' || pathnamePrefix === '/app') && index === 0) return true;
//   return routeMatch !== null && routeMatch !== undefined
//     // first try to match agaings routeMatch, if given
//     ? (
//       this.props.location.pathname.match(routeMatch) !== null
//       && (routeMatchExclude ? this.props.location.pathname.match(routeMatchExclude) === null : true)
//     )
//     // next try to match the first 2 path fragments
//   : (routePrefix !== '/' && routePrefix.match(new RegExp(`^${pathnamePrefix}$`, 'i')) && true);
// }

const NavBarStyle = styled(FlexFragment)`

`;
const BadgeStyle = styled(Fragment)`
`;

export default function StaticMenuList(props: Props) {
  const { items } = props;
  return (
    <NavBarStyle {...props}>
      {items.map((item, index) => (
        <Button
          key={item.id as string || index}
          {...item}
          to={item.route}
          // this.isMatching({ ...item, index })
        >
          {!item.Component && item.image && (
            <Image source={(this.isMatching(item) && item.imageActive) || item.image} className={item.imageClassName} />
          )}

          {item.Component && (
            <View id={index}>
              <item.Component />
            </View>
          )}

          {item.title && (
            <Text>{item.title}</Text>
          )}

          {item.badge && (
            <BadgeStyle>{item.badge}</BadgeStyle>
          )}
        </Button>
      ))}
    </NavBarStyle>
  );
}
