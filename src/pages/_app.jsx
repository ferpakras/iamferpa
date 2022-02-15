import { globalStyles } from '../../stitches.config';
import { MainProvider } from '../shared/store/MainContextStore';

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <>
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </>
  );
}

export default MyApp;
