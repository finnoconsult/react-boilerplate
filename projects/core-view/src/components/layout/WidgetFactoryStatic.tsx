import React from 'react';
import { WidgetType } from "./WidgetType.d";
import { Image } from '../..';

export const WidgetFactoryStatic = ({ title, images, size }: WidgetType) => {
  const imageSource = (size && images[size]) || images.medium;
  return (
    <>
      {!imageSource && title}
      {imageSource && <Image source={imageSource} />}
    </>
  );
}
 