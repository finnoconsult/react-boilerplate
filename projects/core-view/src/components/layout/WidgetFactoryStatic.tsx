import React from 'react';
import { WidgetType } from "./WidgetType";
import { Image } from '../..';

// interface A {
//   small ?: string;
//   medium: string;
//   large ?: string;
// }
// class AA implements A {
//   small='';
//   constructor(s: string) {
//     this.small=s;
//     this['small']
//   }

// };
// const a = new AA('ss');

export const WidgetFactoryStatic = ({ title, images, size }: WidgetType) => {
  const imageSource = images && ((size && images[size]) || images.medium);
  return (
    <>
      {!imageSource && title}
      {imageSource && <Image source={imageSource} className="fullWidth" />}
    </>
  );
}
