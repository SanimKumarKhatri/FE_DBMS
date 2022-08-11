import { NextUIProvider } from '@nextui-org/react';
import '../styles/navbarstyle.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
    </>
  );
}

export default MyApp;