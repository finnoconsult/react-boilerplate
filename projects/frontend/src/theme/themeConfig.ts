export const mainTheme = {
  colors: {
    background: '#fff',
    backgroundLight: '#f3f3f4',
    backgroundDark: '#000',
    border: '#b2b2b2',
    divider: '#e5e5e5',
    cta: '#ffcc00',
    info: '#282828', // TODO: ADAC
    disabled: '#e5e5e5', // TODO: ADAC
    text: '#191919',
    ready: '#2e7d2b',
    overlay: 'rgba(25,25,25,0.5)',

    progress: '#2E7D2B', // green
    info2: '#33A3DC', // blue
    warning: '#CC3330', // red
  },
  font: {
    text: '1.8rem',
    smallText: '1.6rem',
    subTitle: '1.8rem',
    subTitleBig: '2.0rem',
    title: '2.4rem',
    link: '1.8rem',
    sizeButton: '1.8rem',
    face: {
      office: "'Milo ADAC Offc', MiloADACOffc, 'Milo ADAC', MiloADAC, sans-serif",
      default: "'Milo ADAC', MiloADAC, sans-serif",
      slab: "'Milo Slab ADAC', MiloSlabADAC, 'Milo ADAC', MiloADAC, sans-serif",
      bold: {
        office: "'Milo ADAC Offc Bold', MiloADACOffc-Bold, 'Milo ADAC Bold', MiloADAC-Bold, sans-serif",
        default: "'Milo ADAC Bold', MiloADAC-Bold, sans-serif",
        slab: "'Milo Slab ADAC Bold', MiloSlabADAC-Bold, 'Milo ADAC Bold', MiloADAC-Bold, sans-serif",
      },
    },
  },
  animation: {
    time: '0.2s',
    transformTransition: '0.2s transform ease-out',
    hegihtTransition: '0.8s max-height ease-out',
    topTransition: '0.8s top ease-out',
  },
  spacing: {
    basicPadding: '14px',
    paragraphPadding: '14px 20px',
    basicMargin: '14px',
  },
  layout: {
    navBarHeight: '60px',
    tabBarHeight: '0px',
  },
  effects: {
    bigShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.4)',
    // bigShadow: '0 0 12px 0 rgba(0,0,0,0.25)',
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
