import React from 'react';

import { Dimensions, Browser, Children } from '../../types';

import { LayoutProps } from './Layout';
import { WidgetStyle } from './WidgetStyle';

// TODO: use other widgets
interface WidgetType {
  id: string | number;
  component?: () => JSX.Element;
  title?: string;
}


// TODO: display static images:
const WidgetFactoryStatic = ({ title }: WidgetType) => (
  <div>
    STATIC:
    {title}
    , TOOD: image
  </div>
);

// TODO: refactor
const WidgetFactory = (props: WidgetType) => {
  const { component: Component } = props;
  return Component ? <WidgetStyle {...props}><Component /></WidgetStyle> : <WidgetFactoryStatic {...props} />;
};


interface FindWidgetProps {
  widgets: WidgetType[];
  position: string;
}

function renderWidgets({ widgets, position }: FindWidgetProps) {
  const findWidgets = widgets
    .filter(widget => widget.position === position);
  // console.log('findWidget', position, findWidgets);
  return (
    <>
      {findWidgets.map((widget, index) => <WidgetFactory key={widget.id || index} {...widget} />)}
    </>
  );
}


interface Props {
  layout: (props: LayoutProps) => JSX.Element;
  widgets: WidgetType[];
  children: Children;
  resolution: Dimensions;
  browser: Browser;
}

export const WidgetLayoutBuilder = ({
  layout: Layout,
  widgets,
  children,
  resolution,
  browser,
}: Props) => (
  <Layout
    header={() => renderWidgets({ widgets, position: 'header' })}
    nav={() => renderWidgets({ widgets, position: 'nav' })}
    left={() => renderWidgets({ widgets, position: 'left' })}
    right={() => renderWidgets({ widgets, position: 'right' })}
    footer={() => renderWidgets({ widgets, position: 'footer' })}
    resolution={resolution}
    browser={browser}
  >
    {children}
  </Layout>
);

export default WidgetLayoutBuilder;
