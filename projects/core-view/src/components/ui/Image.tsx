import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import { Children, ImageOrComponent } from '../../types';

// import styles from './Image.scss';

import Button from './Button';
import Link from './LinkStyle';


export const ImageStyle = styled.figure`
  text-align: center;
  width: 100%;
  height: auto;

  &.fullHeight {
    width: auto;
    height: 100%;
  }
  &.originalSize {
    width: auto;
    height: auto;
  }
  &.icon {
    width: auto;
    height: 20px;
    padding: 0px 2px;
  }
  ${'' /* &.bordered {
    box-shadow: $theme-item-box-shadow;
    border: solid 1px $theme-color-gray;
    border-top: none;
    border-radius: $web-item-radius;
  } */}

`;

// interface cleanSVGPropsTypes {
//   source, sourceWhite, sourceBlue, isButton, image, imageWeb, template, templateWeb, classNameWeb, titleWeb, news, newsWeb, amount, freeToSpend, status, statusWeb, route, routeWeb, fulfil, fulfilWeb, link, _image, _imageActive, imageActive, _imageComponent, imageComponent, _imageComponentActive, imageComponentActive, _imageBig, imageBig, _icon, _isButton, _status, _template, _className, _title, _news, _fulfil, _route, isDraggingEnabled, defaultTemplate
// }

// function cleanSVGProps(props: any) {
//   const {
//     // eslint-disable-next-line
//     source, sourceWhite, sourceBlue, isButton, image, imageWeb, template, templateWeb, classNameWeb, titleWeb, news, newsWeb, amount, freeToSpend, status, statusWeb, route, routeWeb, fulfil, fulfilWeb, link, _image, _imageActive, imageActive, _imageComponent, imageComponent, _imageComponentActive, imageComponentActive, _imageBig, imageBig, _icon, _isButton, _status, _template, _className, _title, _news, _fulfil, _route, isDraggingEnabled, defaultTemplate,
//     ...cleanProps
//   } = props;
//   return cleanProps;
// }


interface ImgTagProps {
  id?: number | string;
  source: ImageOrComponent;
  title?: string;
  caption?: string;
  usemap?: string;
  className?: string;
  // default?: boolean;
  originalSize?: boolean;
  embeddedChildren?: JSX.Element[] | JSX.Element;
  onLoad?: () => void;
  style?: {};
  figureStyle?: {};
}

function cloneComponentInstanceHOC(Component: JSX.Element, props: ImgTagProps) {
  return React.cloneElement(Component, {
    // ...cleanSVGProps(props), // this is too generic for SVGs
    style: props.style || (Component.props && Component.props.style) || {},
    // className: `${props.className || styles.default} ${props.default && styles.default} ${props.originalSize && styles.originalSize}`,
  });
}


const ImgTag = (props: ImgTagProps) => {
  const {
    id,
    source,
    title,
    caption,
    usemap,
    className,
    // default,
    embeddedChildren,
    // originalSize,
    onLoad,
    style,
    figureStyle,
  } = props;
  return (
    <ImageStyle style={{ ...(figureStyle || {}), lineHeight: 0 }} className={className}>
      {source && typeof source === 'object' && cloneComponentInstanceHOC(source, props)}
      {typeof source === 'function' && (
        <source
          // {...cleanSVGProps(props)}
          style={style || {}}
          // className={`${className || styles.default} ${default && styles.default} ${originalSize && styles.originalSize}`}
        />
      )}
      {typeof source !== 'object' && typeof source !== 'function' && (
        <img
          onLoad={onLoad}
          id={(id && 1) ? `img-${id}` : 'f'}
          src={source}
          alt={title || id as string || ''}
          style={style || {}}
          useMap={usemap}
          // className={`${className || styles.default} ${default && styles.default} ${originalSize && styles.originalSize}`}
        />
      )}
      {caption && (<figcaption style={{ lineHeight: 'normal' }}>{caption}</figcaption>)}
      {embeddedChildren}
    </ImageStyle>
  );
};

interface ImageProps extends ImgTagProps{
  children?: Children;
  link?: string;
  image?: ImageOrComponent; // using this in case source is not given
  onClick?: () => void;
}


export const Image = (props: ImageProps) => {
  const {
    source,
    image,
    children,
    link,
    onClick,
  } = props;

  if (!source && !image) {
    console.warn('Image hasn\'t received mandatory source props', props);
    return null;
  }

  const imageSource = source || image;

  if (link) {
    return (
      <Link to={link} className="wrappedComponent">
        <ImgTag {...props} source={imageSource} />
        <>{children}</>
      </Link>
    );
  }

  if (onClick) {
    return (
      <Button onClick={() => onClick()} className="wrappedComponent">
        <ImgTag {...props} source={imageSource} />
        <>{children}</>
      </Button>
    );
  }

  if (children) {
    return (
      <span className="wrappedComponent">
        <ImgTag {...props} source={imageSource} />
        {children}
      </span>
    );
  }

  return <ImgTag {...props} source={imageSource} />;
};


export default Image;
