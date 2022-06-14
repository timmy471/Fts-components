import type { NextPage } from 'next';
import Head from 'next/head';

import { MetaHead, Typography } from '../src/components';

const Login: NextPage = () => {
  return (
    <div className='login'>
      <MetaHead />
      <h1>Login Page</h1>
      <Typography component='h1'>

      </Typography>
    </div>
  );
};

export default Login;
