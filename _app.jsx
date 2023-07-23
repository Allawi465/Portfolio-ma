import appWithI18n from 'next-translate/appWithI18n';
import i18nConfig from '../i18n';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Wrapping your _app.js
export default appWithI18n(MyApp, {
  ...i18nConfig,
  // Set to false if you want to load all the namespaces on _app.js getInitialProps
  skipInitialProps: true,
});
