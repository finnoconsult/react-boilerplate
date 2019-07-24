import platform from 'platform';
import get from 'lodash.get';

import { Dimensions, SizeRect } from '../types';

export function isPortrait({ width, height }: SizeRect) {
  return Math.floor(width / height) === 0;
}

export function isLandscape(a: SizeRect) {
  return !isPortrait(a);
}


export const browser = {
  ...platform,
};

export function isIE11() {
  return `${get(browser, 'name')}${parseInt(get(browser, 'version', ''), 0)}`.toLowerCase() === 'ie11';
}

export function isAndroid() {
  return `${get(browser, 'os.family')}`.toLowerCase() === 'android';
}
export function getResolution(): Dimensions {
  const { body, documentElement: html } = document;

  const width = Math.min(body.scrollWidth, body.offsetWidth, window.innerWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
  const height = Math.min(body.scrollHeight, body.offsetHeight, window.innerHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  return {
    width,
    height,
    left: -1,
    right: -1,
    top: -1,
    bottom: -1,
    isPortrait: isPortrait({ width, height }),
  };
}

interface BigDeviceDetectionProps {
  tabletMaxWidth: string;
  size: Dimensions;
}
interface PhoneDeviceDetectionProps {
  mobileMaxWidth: string;
  size: Dimensions;
}
interface TabletDeviceDetectionProps extends PhoneDeviceDetectionProps {
  tabletMaxWidth: string;
}

export function isDesktop({ tabletMaxWidth, size = getResolution() }: BigDeviceDetectionProps) {
  return parseInt(tabletMaxWidth, 10) < size.width;
}

export function isTablet({ mobileMaxWidth, tabletMaxWidth, size = getResolution() }: TabletDeviceDetectionProps) {
  const isIt = parseInt(mobileMaxWidth, 10) < size.width && parseInt(tabletMaxWidth, 10) >= size.width;
  // console.log('isTablet?', size.width, deviceSmallScreenPhone, deviceSmallScreenTabletMax, isIt);
  return isIt;
}
export function isPhone({ mobileMaxWidth, size = getResolution() }: PhoneDeviceDetectionProps) {
  const isIt = parseInt(mobileMaxWidth, 10) >= size.width;
  // console.log('isPhone?', mobileMaxWidth, size, '=>', isIt);
  return isIt;
}


export const resolution = getResolution();

export function isAndoridNewerThanKitKat() {
  return isAndroid() && parseFloat(get(browser, 'os.version')) >= 4.4;
}

export default function getBrowser() {
  return browser;
}
