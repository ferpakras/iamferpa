import {
  sage,
  gray,
  violet,
  mauve,
  sageDark,
  grayDark,
  violetDark,
  mauveDark
} from '@radix-ui/colors';

import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      line: '$gray7',
    },
    space: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
      6: '3rem',
      7: '5rem',
    },
    sizes: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
      6: '3rem',
    },
    radii: {
      1: "0px",
      2: "4px",
      3: "6px",
      4: "16px",
      5: "50px"
    },
    fontSizes: {
      xs: "0.625rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      xxl: "2rem",
    },
    lineHeights: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
      6: '3rem',
    },
    fonts: {
      logo: 'Fira Code, monospace',
      mavenPro: 'Maven Pro, sans-serif',
    },
    shadows: {
      ...sage,
      ...gray,
      ...mauve,
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 740px)',
    bp2: '(min-width: 1080px)',
  },

})

export const lightTheme = createTheme({
	colors: {
    ...sage,
    ...gray,
    ...violet,
    ...mauve,
  }
})

export const darkTheme = createTheme({
	colors: {
    ...sageDark,
    ...grayDark,
    ...violetDark,
    ...mauveDark,
  }
})

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  "body": {
    fontFamily: "$mavenPro",
  }
});
