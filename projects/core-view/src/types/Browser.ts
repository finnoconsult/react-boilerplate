// export { platform as Browser } from '@types/platform';
// TODO: import from platform

export interface Browser {
  description?: string;
  layout?: string;
  manufacturer?: string;
  name?: string;
  prerelease?: string;
  product?: string;
  ua?: string;
  version?: string;
  os?: {
    architecture?: number;
    family?: string;
    version?: string;
    toString(): string;
  };
}
