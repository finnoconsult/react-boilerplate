import React from 'react';
import styled from 'styled-components';

export interface IconStyleProp {
  color?: string;
  size?: string;
  round?: boolean | string;
  border?: string;
  center?: boolean;
}

export const IconStyle = styled.span <IconStyleProp>`
  ${props => props.color && `
    svg g > polygon,
    svg g > ellipse,
    svg g > path,
    svg g > circle,
    svg g > use,
    svg > polygon,
    svg > ellipse,
    svg > path,
    svg > circle,
    svg > use {
      fill: ${props.theme.colors[props.color] || props.color};
    }
    svg #norecolor polygon,
    svg #norecolor ellipse,
    svg #norecolor path,
    svg #norecolor circle,
    svg #norecolor use{
      fill: inherit;
    }
    svg #recolorwhite,
    svg #recolorwhite polygon,
    svg #recolorwhite ellipse,
    svg #recolorwhite path,
    svg #recolorwhite circle,
    svg #recolorwhite use{
      stroke: #ffffff !important;
      fill: #ffffff !important;
    }
  `}

  ${props => props.size && `
    svg, img {
      width: auto !important;
      height: ${props.size} !important;
    }
  `}

  ${props => props.round && `
    border-radius: 100%;
    border: ${props.border || 'solid 1px #E1E2E0'};
    overflow: hidden;
    display: flex;
    width: ${props.round !== true ? props.round : '42px'};
    height: ${props.round !== true ? props.round : '42px'};
    padding: ${props.round && parseInt(`${props.round}`, 10) > 50 ? `${parseInt(`${props.round}`, 10) / 5}px` : '10px'};
    align-items: center;
    justify-content: center;

    svg, img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `}

  ${props => props.center && `
    display: flex;
    align-items: center;
    justify-content: center;

    svg, img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `}

`;

export interface IconProps extends IconStyleProp {
  name?: string;
  source?: React.ComponentClass<any>;
  caption?: string;
  title?: string;
}

export const Icon = (props: (IconProps)) => {
  const {
    name,
    source: Source,
    color,
    size,
    caption,
    title,
    round,
    center,
    border,
  } = props;

  // TODO: implement logic, probably based on UI store
  const finalColor = color;

  // const LookUpSource = getIcon();

  return (
    <IconStyle round={round} center={center} color={color} size={size} border={border}>
      {Source && <Source width="100%" height="auto" title={title || caption} color={finalColor} /> }
      {!Source && name && `[${name || 'X'}]`}
    </IconStyle>
  );
}

export default Icon;