import { FragmentProps } from '../Fragment';
import { WidgetConfigType } from '@finnoconsult/core-model';

export type WidgetType = WidgetConfigType | FragmentProps;

// NOTE: creating interface did not work
// export interface WidgetType extends WidgetConfigType {
//   a?: string;
// }