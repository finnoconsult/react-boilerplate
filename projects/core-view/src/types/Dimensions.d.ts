export interface Dimensions extends ClientRect {
  isPortrait?: boolean;
  isLandscape?: boolean;
  isDesktop?: boolean;
  isTablet?: boolean;
  isPhone?: boolean;
  isMobile?: boolean;
}

export interface SizeRect {
  width: number;
  height: number;
}
