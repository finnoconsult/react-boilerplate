import get from 'lodash.get';
import { camelize } from '@finnoconsult/core-model';

export default function getIcon(iconList: any, name: string, path:string = 'ico.jsx') {
  const icons = get(iconList, path, []);

  const key = camelize(`icon-jsx-${name}`);

  if (icons && icons[key]) {
    return icons && icons[key];
  } else if (name !== 'empty') {
    console.error('<Icon> not found per name', key);
  }
  return null;
}