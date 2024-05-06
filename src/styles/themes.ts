'use client';
import { Poppins, Lato } from 'next/font/google';
import { createTheme } from '@mui/material';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const breakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
}).breakpoints;

// https://lospec.com/palette-list/cc-29
// f2f0e5
// b8b5b9
// 868188
// 646365
// 45444f
// 3a3858
// 212123
// 352b42
// 43436a
// 4b80ca
// 68c2d3
// a2dcc7
// ede19e
// d3a068
// b45252
// 6a536e
// 4b4158
// 80493a
// a77b5b
// e5ceb4
// c2d368
// 8ab060
// 567b79
// 4e584a
// 7b7243
// b2b47e
// edc8c4
// cf8acb
// 5f556a

const palette = createTheme({
  palette: {
    primary: {
      main: '#f2f0e5',
    },
    secondary: {
      main: '#b8b5b9',
    },
    error: {
      main: '#b45252',
    },
    warning: {
      main: '#d3a068',
    },
    info: {
      main: '#4b80ca',
    },
    success: {
      main: '#8ab060',
    },
    text: {
      primary: '#212123',
      secondary: '#3a3858',
    },
    background: {
      default: '#f2f0e5',
    },
    common: {
      white: '#f2f0e5',
      black: '#212123',
    },
  },
}).palette;

const typography = createTheme({
  typography: {
    fontFamily: lato.style.fontFamily,
    fontSize: 14,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      color: palette.text.primary,
      textAlign: 'center',
      marginBottom: '2rem',
      fontSize: '2rem',
      [breakpoints.up('md')]: {
        fontSize: '3rem',
      },
      [breakpoints.up('lg')]: {
        marginBottom: '3rem',
        fontSize: '4.5rem',
      },
      fontWeight: 700,
    },
    h2: {
      color: palette.text.primary,
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h3: {
      color: palette.text.primary,
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      marginBottom: '1rem',
    },
    subtitle2: {
      marginBottom: '1rem',
    },
    body1: {
      color: palette.text.secondary,
    },
    body2: {
      color: palette.text.secondary,
    },
    caption: {
      color: palette.text.secondary,
    },
    button: {
      textTransform: 'none',
    },
  },
}).typography;

const DefaultTheme = createTheme({
  palette: palette,
  typography: typography,
  breakpoints: breakpoints,
});

export default DefaultTheme;
