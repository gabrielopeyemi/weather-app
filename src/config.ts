const bodySize: number = 1.0;

export const weatherAPI = process.env.REACT_APP_WEATHER_API;
export const googleAPIKey = process.env.REACT_APP_GOOGLE_API;

export const fonts = {
    BODY: `${bodySize}em`,
    SUBHEADER: `${bodySize * 1.3}em`,
    HEADER: `${bodySize * 1.96}em`,
};

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };