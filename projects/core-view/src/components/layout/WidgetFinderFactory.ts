import { WidgetSearchProps } from "./WidgetSearchProps.d";

export const WidgetFinderFactory = ({ widgets, ...search }: WidgetSearchProps) => 
    widgets.filter(widget => widget.position === search.position);

export default WidgetFinderFactory;
