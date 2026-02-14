import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';

/**
 * Custom App component used by Next.js to initialize pages.
 * It wraps every page with the MUI ThemeProvider and injects
 * baseline styles. The site title and description can be overridden
 * within individual pages via Head.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
