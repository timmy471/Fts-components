import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';

import '../styles/main.scss';
import { MetaHead } from '../src/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MetaHead />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
