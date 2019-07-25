import { FragmentProps } from '../Fragment';
import { WidgetConfigType } from '@finnoconsult/core-model';

export interface WidgetType extends WidgetConfigType, FragmentProps {

}

// NOTE: creating interface did not work
// export interface WidgetType extends WidgetConfigType {
//   a?: string;
// }