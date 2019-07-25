import { WidgetMatchType } from '@finnoconsult/core-model';
import { WidgetType } from "./WidgetType.d";

// TODO: match agains WidgetMatchType & StandaloneWidgetConfigType
export interface WidgetSearchProps extends WidgetMatchType {
  widgets: WidgetType[];
  // TODO: just use WidgetMatchType;
  position: string;
  // route: string;
}
