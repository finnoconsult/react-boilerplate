export const mainTheme = {
  colors: {
    main: 'red',
    cta: 'orange',
    info: 'orange',
    normal: 'black',
    disabled: 'gray',
    black: '#282828',
    blue: '#00a8d6',
    red: '#d64218',
    orange: '#d64218',
    grey: '#8b959e',
    gray: '#8b959e',
    white: '#ffffff',
    ocher: '#F29315',
    azure: '#8FD2E5',
    salmon: '#F3BE7C',
  },
  font: {
    base: '10px',
    size: '1rem',
  },
  border: {
    main: 'red',
    cta: 'orange',
    info: 'orange',
    normal: 'black',
    disabled: 'gray',
  },
  spacing: {
    basicPadding: '20px',
  },
};

export const mainConfig = {
  devices: {
    mobileMaxWidth: '400px',
    tabletMaxWidth: '900px',
    desktopWideScreen: '1120px',
  },
};

export const darkTheme = {
  colors: {
    main: 'black',
    cta: 'gray',
    info: 'lightgray',
    normal: 'black',
    disabled: 'gray',
  },
};

// TODO: mobile?

export default {
  ...mainConfig,
  ...mainTheme,
  all: {
    main: mainTheme,
    dark: darkTheme,
  },
};
