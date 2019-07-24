import { useLocation } from '@finnoconsult/core-view';
import { WidgetSearchProps } from "./WidgetSearchProps.d";

const matchingRoute = (routeMatcher: string | any): boolean => {
  const location = useLocation();
  const { pathname: currentRoute } = location;
  console.log(currentRoute, '.match(', routeMatcher, !!currentRoute .match(routeMatcher));

  return routeMatcher === currentRoute || !!currentRoute.match(routeMatcher);
};
// TODO: should be the global type!
interface WidgetType {
  routes?: string[];
  excludedRoutes?: string[];
  position: string;
  id: string;
}

interface WidgetSearchProps2 extends WidgetSearchProps {
  widgets: WidgetType[];
}

export const WidgetFinderFactory = ({ widgets, ...search }: WidgetSearchProps2) => (
  widgets
    .filter(widget => widget.position === search.position)
    .filter(widget => (
      (!widget.routes || (
        widget.routes.find(route => matchingRoute(route))
      ))
      && !(
        widget.excludedRoutes
        && widget.excludedRoutes.find(route => matchingRoute(route))
      )
    ))
);

export default WidgetFinderFactory;
