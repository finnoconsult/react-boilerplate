import { WidgetSearchProps } from "./WidgetSearchProps";
import { useLocation } from "../..";

const matchingRoute = (routeMatcher: string | RegExp | undefined): boolean => {
  const location = useLocation();
  const { pathname: currentRoute } = location;
  // console.log(currentRoute, '.match(', routeMatcher, !!currentRoute .match(routeMatcher));

  return !!routeMatcher && (routeMatcher === currentRoute || !!currentRoute.match(routeMatcher));
};

export const WidgetFinderFactory = ({ widgets, ...search }: WidgetSearchProps) => (
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
