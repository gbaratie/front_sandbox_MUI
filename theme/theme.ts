import { createTheme } from '@mui/material/styles';

/**
 * A custom Material‑UI theme for the consulting and portfolio site.
 * The palette uses neutral colours with a midnight blue accent to convey
 * professionalism with a subtle artistic touch. Typography is set to Roboto,
 * the default font included with Material‑UI.
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0d47a1', // midnight blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#546e7a', // blue‑grey for accents
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '0.5rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

export default theme;
