export const mainTheme = {
  colors: {
    main: 'red',
    cta: 'orange',
    info: 'orange',
    normal: 'black',
    disabled: 'gray',
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
  ...mainTheme,
  all: {
    main: mainTheme,
    dark: darkTheme,
  },
};
