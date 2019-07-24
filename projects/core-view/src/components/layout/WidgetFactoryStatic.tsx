import React from 'react';
import { WidgetType } from "./WidgetType.d";
// TODO: use other widgets
// interface WidgetConfigType extends WidgetType {
//   id: string | number;
//   component?: () => JSX.Element;
//   title?: string;
//   position?: string;
// }
// TODO: display static images:
export const WidgetFactoryStatic = ({ title }: WidgetType) => (<div>
  STATIC:
    {title}
  , TOOD: image
  </div>);
