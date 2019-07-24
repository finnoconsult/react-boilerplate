import { WidgetSearchProps } from "./WidgetSearchProps.d";

const matchingRoute = (routeMatcher: string | any, route2Match: string): boolean => {
    return routeMatcher === route2Match || !!route2Match.match(routeMatcher);
};
// TODO: not working !
interface WidgetType {
    routes: string[];
    position: string;
}

interface WidgetSearchProps2 extends WidgetSearchProps {
    route: string;
    widgets: WidgetType[];
}

export const WidgetFinderFactory = ({ widgets, ...search }: WidgetSearchProps2) => (
    widgets
        .filter(widget => widget.position === search.position)
        .filter(widget => widget.routes.find(route => matchingRoute(route, search.route)))
);

export default WidgetFinderFactory;
