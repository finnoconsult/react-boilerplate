export interface PlatformProps {
  isPortrait?: boolean;
  isLandscape?: boolean;
  isDesktop?: boolean;
  isTablet?: boolean;
  isPhone?: boolean;
  isMobile?: boolean;
}

export interface Dimensions extends ClientRect, PlatformProps {
}

export interface SizeRect {
  width: number;
  height: number;
}
