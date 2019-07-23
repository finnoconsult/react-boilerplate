import platform from 'platform';
import { Dimensions } from '../types/Dimensions.d';


export function isPortrait({ width, height }) {
  return Math.floor(width / height) === 0;
}

export function isLandscape(a) {
  return !isPortrait(a);
}


export const browser = {
  ...platform,
};

export function isIE11() {
  return `${browser.name}${parseInt(browser.version, 0)}`.toLowerCase() === 'ie11';
}

export function isAndroid() {
  return `${browser.os.family}`.toLowerCase() === 'android';
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

export function isDesktop({ tabletMaxWidth, size = getResolution() }) {
  return parseInt(tabletMaxWidth, 10) < size.width;
}

export function isTablet({ mobileMaxWidth, tabletMaxWidth, size = getResolution() }) {
  const isIt = parseInt(mobileMaxWidth, 10) < size.width && parseInt(tabletMaxWidth, 10) >= size.width;
  // console.log('isTablet?', size.width, deviceSmallScreenPhone, deviceSmallScreenTabletMax, isIt);
  return isIt;
}
export function isPhone({ mobileMaxWidth, size = getResolution() }) {
  const isIt = parseInt(mobileMaxWidth, 10) >= size.width;
  return isIt;
}


export const resolution = getResolution();

export function isAndoridNewerThanKitKat() {
  return isAndroid() && parseFloat(browser.os.version, 0) >= 4.4;
}

export default function getBrowser() {
  return browser;
}
