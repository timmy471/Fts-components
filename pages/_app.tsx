import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '../styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MetaHead } from '../src/components';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <MetaHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
