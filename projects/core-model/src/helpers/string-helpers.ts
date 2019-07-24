export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export const lcfirst = (string: any) => String(string).charAt(0).toLowerCase() + String(string).slice(1);
export const ucfirst = (string: string) => String(string).charAt(0).toUpperCase() + String(string).slice(1);
export const camelize = (string: any, change1st = false) => String(string).split('-').map((part, index) => ((index || change1st) && ucfirst(part)) || part).join('');
