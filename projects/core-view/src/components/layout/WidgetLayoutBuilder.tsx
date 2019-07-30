import React from 'react';

import { Dimensions, Browser, Children } from '../../types';

import { LayoutProps } from './Layout';
import { WidgetType } from './WidgetType';
import { WidgetFactory } from './WidgetFactory';
import { WidgetFinderFactory } from './WidgetFinderFactory';
import { WidgetSearchProps } from './WidgetSearchProps';

function renderWidgets(props: WidgetSearchProps) {
  const foundWidgets = WidgetFinderFactory(props);
  // console.log('findWidget', props.position, foundWidgets);
  return (
    <>
      {foundWidgets.map((widget, index) => <WidgetFactory key={widget.id || index} {...widget} />)}
    </>
  );
}


interface Props {
  layout: (props: LayoutProps) => JSX.Element;
  widgets: WidgetType[];
  children?: Children;
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
    main={() => renderWidgets({ widgets, position: 'main' })}
    resolution={resolution}
    browser={browser}
  >
    {renderWidgets({ widgets, position: 'children' })}
    <>{children}</>
  </Layout>
);

export default WidgetLayoutBuilder;
