import { WidgetSearchProps } from "./WidgetSearchProps.d";

const matchingRoute = (routeMatcher: string | any, route2Match: string): boolean => {
    console.log(route2Match, '.match(', routeMatcher, !!route2Match.match(routeMatcher));
    return routeMatcher === route2Match || !!route2Match.match(routeMatcher);
};
// TODO: should be the global type!
interface WidgetType {
    routes?: string[];
    excludedRoutes?: string[];
    position: string;
    id: string;
}

interface WidgetSearchProps2 extends WidgetSearchProps {
    route: string;
    widgets: WidgetType[];
}

export const WidgetFinderFactory = ({ widgets, ...search }: WidgetSearchProps2) => (
    widgets
        .filter(widget => widget.position === search.position)
        .filter(widget => (
            (!widget.routes || (
                widget.routes.find(route => matchingRoute(route, search.route))
            ))
            && !(
                widget.excludedRoutes
                && widget.excludedRoutes.find(route => matchingRoute(route, search.route))
            )
        ))
);

export default WidgetFinderFactory;
