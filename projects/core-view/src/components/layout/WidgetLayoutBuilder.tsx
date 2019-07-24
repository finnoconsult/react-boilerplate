import React from 'react';

import { Dimensions, Browser, Children } from '../../types';

import { LayoutProps } from './Layout';
import { WidgetType } from "./WidgetType.d";
import { WidgetFactory } from './WidgetFactory';
import { WidgetFinderFactory } from './WidgetFinderFactory';
import { WidgetSearchProps } from './WidgetSearchProps';

function renderWidgets(props: WidgetSearchProps) {
  const foundWidgets = WidgetFinderFactory(props);
  // console.log('findWidget', position, foundWidgets);
  return (
    <>
      {foundWidgets.map((widget, index) => <WidgetFactory key={widget.id || index} {...widget} />)}
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
    header={() => renderWidgets({ widgets, position: 'header', route: 'TODO: hook it!' })}
    nav={() => renderWidgets({ widgets, position: 'nav', route: 'TODO: hook it!' })}
    left={() => renderWidgets({ widgets, position: 'left', route: 'TODO: hook it!' })}
    right={() => renderWidgets({ widgets, position: 'right', route: 'TODO: hook it!' })}
    footer={() => renderWidgets({ widgets, position: 'footer', route: 'TODO: hook it!' })}
    resolution={resolution}
    browser={browser}
  >
    {children}
  </Layout>
);

export default WidgetLayoutBuilder;
