import { WidgetMatchType } from '@finnoconsult/core-model';
import { WidgetType } from "./WidgetType";

// TODO: match agains WidgetMatchType & StandaloneWidgetConfigType
export interface WidgetSearchProps extends WidgetMatchType {
  widgets: WidgetType[];
  // TODO: just use WidgetMatchType;
  position: string;
}
