import React from 'react';
import { WidgetStyle } from './WidgetStyle';
// import { WidgetType } from "./WidgetType";
import { WidgetFactoryStatic } from "./WidgetFactoryStatic";
import { WidgetType, OneComponentDefinitionType } from '@finnoconsult/core-model';

export const WidgetFactory = (props: WidgetType) => {
  const {
    component: Component,
    wrapperComponent,
    order,
    column,
    row,
    area,
  } = props;
  const allowedStyledProps = {
    order, column, row, area,
  };
  const WrapperComponent: OneComponentDefinitionType = wrapperComponent || WidgetStyle;
  return (
    <WrapperComponent {...allowedStyledProps}>
      {Component ? <Component /> : <WidgetFactoryStatic {...props} />}
    </WrapperComponent>
  );
};
