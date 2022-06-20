import 'antd/dist/antd.css';
import 'aos/dist/aos.css';
import 'antd/dist/antd.css';
import 'nprogress/nprogress.css';
import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { MetaHead, PreLoader } from '../src/components';

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
