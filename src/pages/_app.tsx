import '../styles/global.scss';

import type { AppProps } from 'next/app';
import { wrapper } from 'src/app/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);
