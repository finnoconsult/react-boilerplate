import { WidgetMatchType, StandaloneWidgetConfigType } from '@finnoconsult/core-model';
import { WidgetType } from "./WidgetType";

// TODO: match agains WidgetMatchType & StandaloneWidgetConfigType
export interface WidgetSearchProps extends WidgetMatchType, StandaloneWidgetConfigType {
  widgets: WidgetType[];
  // TODO: just use WidgetMatchType;
  // position: string;
  // route: string;
}
