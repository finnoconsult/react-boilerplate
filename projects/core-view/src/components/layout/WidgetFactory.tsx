import React from 'react';
import { WidgetStyle } from './WidgetStyle';
// import { WidgetType } from "./WidgetType";
import { WidgetFactoryStatic } from "./WidgetFactoryStatic";
import { WidgetType } from '@finnoconsult/core-model';

export const WidgetFactory = (props: WidgetType) => {
  const { component: Component, order, column, row, area, } = props;
  const allowedStyledProps = {
    order, column, row, area,
  };
  return (
    <WidgetStyle {...allowedStyledProps}>
      {Component ? <Component /> : <WidgetFactoryStatic {...props} />}
    </WidgetStyle>
  );
};
