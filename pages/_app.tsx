import 'antd/dist/antd.css';
import 'aos/dist/aos.css';
import 'nprogress/nprogress.css';
import 'react-phone-number-input/style.css';
import type { AppProps } from 'next/app';
import { MetaHead, PreLoader } from '../src/components';

import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MetaHead />
      <PreLoader />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
