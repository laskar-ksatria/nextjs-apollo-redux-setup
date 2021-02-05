import '../styles/globals.css'
import App from 'next/app';
import { getToken } from '../lib/utils/getToken';
import { setCookies, getCookies } from 'cookies-next';
import { useApollo } from '../lib/apollo';
import { useStore } from '../store';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  
  const store = useStore(pageProps.initialReduxState);
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
};

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  let ctx = appContext.ctx;
  const appProps = await App.getInitialProps(appContext);
  const cookie_token = getCookies(ctx, "guest_token");
  const token = await getToken(cookie_token);
  setCookies(ctx, "guest_token", token);
  return {
    ...appProps
  }
};
